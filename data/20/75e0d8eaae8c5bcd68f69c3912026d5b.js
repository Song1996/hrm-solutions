callback({
  "levelNumber": 20,
  "size": 19,
  "steps": 108,
  "successRatio": 1,
  "legal": true,
  "worky": true,
  "author": "mrflip",
  "hash": "75e0d8eaae8c5bcd68f69c3912026d5b",
  "path": "20-Multiplication-Workshop-15.109/19.108-mrflip.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 20-Multiplication-Workshop - SIZE 19/15 - SPEED 108/109 --\n\n    JUMP     e\na:\n    INBOX\nb:\nc:\n    COPYFROM 6\nd:\n    OUTBOX\ne:\n    INBOX\n    COPYTO   6\n    JUMPZ    a\n    COPYTO   5\n    INBOX\n    JUMPZ    d\n    COPYTO   0\n    BUMPDN   0\n    JUMPZ    b\nf:\n    COPYFROM 6\n    ADD      5\n    COPYTO   6\n    BUMPDN   0\n    JUMPZ    c\n    JUMP     f\n"
});