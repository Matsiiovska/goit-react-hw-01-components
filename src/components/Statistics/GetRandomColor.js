export default function getRandomHexColor() {
  // Генеруємо випадковий шістнадцятковий код кольору
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  // Повертаємо шістнадцятковий код кольору з переднім символом #
  return `#${randomColor}`;
}