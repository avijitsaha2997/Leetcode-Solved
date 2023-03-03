function lengthOfLastWord(s) {

  s = s.trim();

  let lastSpaceIndex = s.lastIndexOf(' ');

  if (lastSpaceIndex === -1) {
    return s.length;
  }

  return s.length - lastSpaceIndex - 1;
}