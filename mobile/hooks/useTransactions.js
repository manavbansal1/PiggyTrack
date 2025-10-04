// React Hook to fetch transactions
import { useState, useCallback } from 'react'
import { Alert } from 'react-native'
import { API_URL } from '../constants/api'

export const useTransactions = (userID) => {


    const [transactions, setTransactions] = useState([])
    const [summary, setSummary] = useState(
        {
            balance: 0,
            income: 0,
            expenses: 0
        }
    );
    const [isLoading, setIsLoading] = useState(true)

    
        const fetchTransactions = useCallback(async () => {
            try {
                const response = await fetch(`${API_URL}/transactions/${userID}`)
                const data = await response.json()
                setTransactions(data)
            } catch (error) {
                console.error('Error fetching transactions', error)
            }
        }, [userID])

        const fetchSummary = useCallback(async () => {
            try {
                const response = await fetch(`${API_URL}/transactions/summary/${userID}`)
                const data = await response.json()
                setSummary(data)
            } catch (error) {
                console.error('Error fetching summary', error)
            }
        }, [userID])

        const loadData = useCallback(async () => {
            try{
                if (!userID) return;
                setIsLoading(true)
                await Promise.all([fetchTransactions(), fetchSummary()])
            } catch (error) {
                console.error('Error loading data', error)
            } finally {
                setIsLoading(false)
            }
        }, [fetchTransactions, fetchSummary, userID]);

        const deleteTransaction = async (id) => {
            try {
                const response = await fetch(`${API_URL}/transactions/${id}`, {
                    method: 'DELETE'
                })
                if (!response.ok) {
                    throw new Error('Failed to delete transaction')
                }
                await loadData()
                Alert.alert('Transaction deleted successfully')
            } catch (error) {
                console.error('Error deleting transaction', error)
                Alert.alert('Error deleting transaction', error.message)
            }
        };

        return { transactions, summary, isLoading, loadData, deleteTransaction }
}