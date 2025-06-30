export const formatTime = (time24) => {
  const [hour, minute] = time24.split(':');
  const h = parseInt(hour, 10);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 || 12;
  return `${h12}:${minute}${ampm}`;
};

export const randomNumber = (end) => Math.floor(Math.random() * end) + 1;


// Generates a random ID of the given length, following the pattern: lowercase letters and numbers
 export const GenerateRandomId = (length) =>{
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < length; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }