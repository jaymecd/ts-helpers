// prompt and read user input from console
export const read = async (prompt?: string) => new Promise((resolve) => {
  process.stderr.write(prompt || '');
  process.stdin.resume();
  process.stdin.once('data', (data) => {
    process.stdin.pause();
    resolve(data.toString());
  });
});

export default {
  read
};
