import React from "react"
import { TouchableOpacity, View, Text, StyleSheet, ImageBackground } from "react-native"
import DefaultText from "./DefaultText"

const MealComponent = props => {

    return (

        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
                        <DefaultText>{props.duration}m</DefaultText>
                        <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                        <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: "row"
    },
    mealItem: {
        height: 200,
        width: "100%",
        backgroundColor: "#e5e5e5",
        borderRadius: 10,
        overflow: "hidden",
        marginVertical: 10,
    },
    mealHeader: {
        height: "85%"
    },
    mealDetails: {
        paddingHorizontal: 10,
        justifyContent: "space-between",
        alignItems: "center",
        height:"15%"
    },
    bgImage: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-end"
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 18,
        color: "white",
        textAlign: "center"
    },
    titleContainer: {
        backgroundColor: "rgba(0,0,0,0.7)",
        paddingVertical: 5,
        paddingHorizontal: 12,
    }
})

export default MealComponent