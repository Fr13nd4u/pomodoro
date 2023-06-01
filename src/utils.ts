export const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return {
    min: minutes.toString().padStart(2, '0'),
    sec: remainingSeconds.toString().padStart(2, '0')
  };
};