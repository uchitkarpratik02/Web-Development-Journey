// 4 Digit OTP
let otp4 = Math.floor(1000 + Math.random() * 9000);
console.log("4 Digit OTP:", otp4);

// 6 Digit OTP
let otp6 = Math.floor(100000 + Math.random() * 900000);
console.log("6 Digit OTP:", otp6);

// 8 Character Password (Letters + Numbers)
let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let password = "";
for (let i = 0; i < 8; i++) {
  password += chars[Math.floor(Math.random() * chars.length)];
}
console.log("8 Character Password:", password);