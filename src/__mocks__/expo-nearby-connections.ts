export const startAdvertise = jest.fn().mockResolvedValue('mock-peer-id');
export const stopAdvertise = jest.fn().mockResolvedValue(undefined);
export const startDiscovery = jest.fn().mockResolvedValue('mock-peer-id');
export const stopDiscovery = jest.fn().mockResolvedValue(undefined);
export const requestConnection = jest.fn().mockResolvedValue(undefined);
export const acceptConnection = jest.fn().mockResolvedValue(undefined);
export const rejectConnection = jest.fn().mockResolvedValue(undefined);
export const disconnect = jest.fn().mockResolvedValue(undefined);
export const sendText = jest.fn().mockResolvedValue(undefined);

export const onInvitationReceived = jest.fn().mockReturnValue(jest.fn());
export const onConnected = jest.fn().mockReturnValue(jest.fn());
export const onDisconnected = jest.fn().mockReturnValue(jest.fn());
export const onPeerFound = jest.fn().mockReturnValue(jest.fn());
export const onPeerLost = jest.fn().mockReturnValue(jest.fn());
export const onTextReceived = jest.fn().mockReturnValue(jest.fn());
