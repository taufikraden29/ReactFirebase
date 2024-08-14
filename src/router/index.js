import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Router = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={HomeScreen} />
		</Stack.Navigator>
	);
};

export default Router;

const styles = StyleSheet.create({});
