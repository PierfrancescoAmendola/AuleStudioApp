import React from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Text,
    useColorScheme,
} from 'react-native';
import { StudyRoom } from '../../types';
import { RoomCard } from './RoomCard';
import { Colors } from '../../theme/colors';
import { Typography } from '../../theme/typography';
import { Spacing } from '../../theme/spacing';

interface RoomListViewProps {
    rooms: StudyRoom[];
    selectedRoom?: StudyRoom;
    onRoomPress: (room: StudyRoom) => void;
}

export const RoomListView: React.FC<RoomListViewProps> = ({
    rooms,
    selectedRoom,
    onRoomPress,
}) => {
    const colorScheme = useColorScheme();
    const colors = colorScheme === 'dark' ? Colors.dark : Colors.light;

    if (rooms.length === 0) {
        return (
            <View style={[styles.emptyContainer, { backgroundColor: colors.background }]}>
                <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
                    Nessuna aula studio trovata
                </Text>
            </View>
        );
    }

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <FlatList
                data={rooms}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <RoomCard
                        room={item}
                        onPress={() => onRoomPress(item)}
                        isSelected={selectedRoom?.id === item.id}
                    />
                )}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContent: {
        padding: Spacing.md,
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: Spacing.xl,
    },
    emptyText: {
        fontSize: Typography.fontSize.base,
        fontFamily: Typography.fontFamily.medium,
        textAlign: 'center',
    },
});
