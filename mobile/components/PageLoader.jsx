import { View, ActivityIndicator } from 'react-native'
import { COLORS } from '@/constants/colors'
import {styles} from "@/assets/styles/home.styles.js"

export const PageLoader = () => {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
    )
}