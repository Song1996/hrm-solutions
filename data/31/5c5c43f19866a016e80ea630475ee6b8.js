callback({
  "levelNumber": 31,
  "size": 65,
  "steps": 51,
  "successRatio": 0.7,
  "type": "specific",
  "legal": false,
  "worky": false,
  "author": "Eirik0",
  "hash": "5c5c43f19866a016e80ea630475ee6b8",
  "path": "31-String-Reverse-11.122/65.51.specific-Eirik0.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 31-String-Reverse - SIZE 65/11 - SPEED 51/122 --\r\n\r\n-- This solution is level-specific (patterned and quantity-limited input).\r\n-- It assumes that the input consists of 3 strings with length 2-5.\r\n\r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    COPYTO   1\r\n    INBOX   \r\n    JUMPZ    c\r\n    COPYTO   2\r\n    INBOX   \r\n    JUMPZ    b\r\n    COPYTO   3\r\n    INBOX   \r\n    JUMPZ    a\r\n    OUTBOX  \r\n    INBOX   \r\na:\r\n    COPYFROM 3\r\n    OUTBOX  \r\nb:\r\n    COPYFROM 2\r\n    OUTBOX  \r\nc:\r\n    COPYFROM 1\r\n    OUTBOX  \r\n    COPYFROM 0\r\n    OUTBOX  \r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    COPYTO   1\r\n    INBOX   \r\n    JUMPZ    f\r\n    COPYTO   2\r\n    INBOX   \r\n    JUMPZ    e\r\n    COPYTO   3\r\n    INBOX   \r\n    JUMPZ    d\r\n    OUTBOX  \r\n    INBOX   \r\nd:\r\n    COPYFROM 3\r\n    OUTBOX  \r\ne:\r\n    COPYFROM 2\r\n    OUTBOX  \r\nf:\r\n    COPYFROM 1\r\n    OUTBOX  \r\n    COPYFROM 0\r\n    OUTBOX  \r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    COPYTO   1\r\n    INBOX   \r\n    JUMPZ    i\r\n    COPYTO   2\r\n    INBOX   \r\n    JUMPZ    h\r\n    COPYTO   3\r\n    INBOX   \r\n    JUMPZ    g\r\n    OUTBOX  \r\ng:\r\n    COPYFROM 3\r\n    OUTBOX  \r\nh:\r\n    COPYFROM 2\r\n    OUTBOX  \r\ni:\r\n    COPYFROM 1\r\n    OUTBOX  \r\n    COPYFROM 0\r\n    OUTBOX  \r\n\r\n\r\n"
});