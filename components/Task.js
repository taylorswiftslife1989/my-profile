import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";

const Task = ({ taskText, isDarkMode, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isImportant, setIsImportant] = useState(false);
  const [popupMessage, setPopupMessage] = useState(""); // Track popup message
  const [popupVisible, setPopupVisible] = useState(false); // Track popup visibility
  const animatedHeight = useRef(new Animated.Value(100)).current;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    Animated.timing(animatedHeight, {
      toValue: isExpanded ? 70 : 155,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleMarkImportant = () => {
    setIsImportant(!isImportant);
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete();
      showPopup("Task Deleted Successfully");
    }
  };

  const showPopup = (message) => {
    setPopupMessage(message);
    setPopupVisible(true);
    setTimeout(() => {
      setPopupVisible(false); // Hide popup after 2 seconds
      setPopupMessage(""); // Clear message
    }, 2000);
  };

  return (
    <Animated.View
      style={[
        styles.taskContainer,
        {
          backgroundColor: isDarkMode ? "#303030" : "#fff",
          height: animatedHeight,
        },
      ]}
    >
      <View style={styles.topRightButtonsContainer}>
        <TouchableOpacity style={styles.moreButton} onPress={toggleExpand}>
          <Text
            style={[
              styles.moreButtonText,
              { color: isDarkMode ? "#ffffff" : "#000000" },
            ]}
          >
            ...
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.notcheckButton,
            {
              borderColor: isDarkMode ? "#61acf1" : "#3770A4",
            },
          ]}
          onPress={handleDelete} // Transfer delete functionality here
        ></TouchableOpacity>
      </View>

      <View style={styles.taskContent}>
        <Text
          style={[
            styles.taskText,
            { color: isDarkMode ? "#ffffff" : "#000000" },
          ]}
        >
          {isImportant ? "⭐ " : ""}
          {taskText}
        </Text>
      </View>

      {isExpanded && (
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity
            style={[styles.actionButton, styles.importantButton]}
            onPress={handleMarkImportant}
          >
            <Text style={styles.actionButtonText}>Important</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Popup notification for task deletion */}
      {popupVisible && (
        <View style={styles.popupContainer}>
          <Text style={styles.popupText}>{popupMessage}</Text>
        </View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 25,
    flexDirection: "column",
    width: "80%",
    marginBottom: 25,
    alignSelf: "center",
    overflow: "hidden",
    position: "relative",
  },
  taskContent: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  taskText: {
    maxWidth: "100%",
    fontSize: 19,
    fontWeight: "600",
    marginLeft: 10,
  },
  topRightButtonsContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    flexDirection: "row",
    paddingHorizontal: 5,
    alignItems: "center",
  },
  moreButton: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 7,
  },
  moreButtonText: {
    fontSize: 35,
    textAlign: "center",
    lineHeight: 25,
    fontWeight: "900",
  },
  notcheckButton: {
    borderWidth: 3,
    width: 35,
    height: 35,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  actionButton: {
    borderRadius: 10,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    paddingHorizontal: 40,
    marginHorizontal: 10,
  },
  importantButton: {
    backgroundColor: "#C8971A",
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#ffffff",
  },
  popupContainer: {
    position: "absolute",
    bottom: -30, // Position the popup below the task
    left: 0,
    right: 0,
    alignItems: "center",
  },
  popupText: {
    backgroundColor: "#61acf1",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
});

export default Task;
