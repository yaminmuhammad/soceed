import { View, Text } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ScreenWrapper = ({ children, bg }) => {
	const { top } = useSafeAreaInsets();
	const paddingTop = top > 20 ? top : 20;

	return <View>{children}</View>;
};

export default ScreenWrapper;
