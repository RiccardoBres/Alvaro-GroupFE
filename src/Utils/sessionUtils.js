export const generateSessionId = () => {
    return Math.random().toString(36).substring(2, 15);
};

export const getSessionId = () => {
    let sessionId = localStorage.getItem('sessionId');
    if (!sessionId) {
        sessionId = generateSessionId();
        localStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
};