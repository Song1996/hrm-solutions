callback({
  "levelNumber": 28,
  "size": 47,
  "steps": 75,
  "successRatio": 0.1,
  "legal": true,
  "worky": true,
  "author": "jdashton",
  "hash": "b9153b800791cb963dd696d59f4ec2f7",
  "path": "28-Three-Sort-34.78/47.75-jdashton.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 28-Three-Sort - SIZE 47/34 - SPEED 75/78 --\n\n    COMMENT  9\n    JUMP     e\na:\n    COPYFROM 2\n    OUTBOX  \n    COPYFROM 1\nb:\n    OUTBOX  \n    COPYFROM 0\nc:\nd:\n    OUTBOX  \ne:\n    INBOX   \n    COPYTO   0\n    INBOX   \n    COPYTO   1\n    SUB      0\n    JUMPN    j\n    COMMENT  0\n    INBOX   \n    COPYTO   2\n    SUB      0\n    JUMPN    i\n    COMMENT  3\n    COPYFROM 0\n    OUTBOX  \n    COPYFROM 1\n    SUB      2\n    JUMPN    g\n    COMMENT  4\n    COPYFROM 2\nf:\n    OUTBOX  \n    COPYFROM 1\n    JUMP     d\ng:\n    COMMENT  5\n    COPYFROM 1\nh:\n    OUTBOX  \n    COPYFROM 2\n    JUMP     c\ni:\n    COMMENT  2\n    COPYFROM 2\n    OUTBOX  \n    COPYFROM 0\n    JUMP     f\nj:\n    COMMENT  1\n    INBOX   \n    COPYTO   2\n    SUB      1\n    JUMPN    a\n    COMMENT  6\n    COPYFROM 1\n    OUTBOX  \n    COPYFROM 0\n    SUB      2\n    JUMPN    k\n    COMMENT  7\n    COPYFROM 2\n    JUMP     b\nk:\n    COMMENT  8\n    COPYFROM 0\n    JUMP     h\n\n\nDEFINE COMMENT 0\neJyLYGBgiFNX09VSTgjPV+Qo2Sd9bfVBKffzQGEGKc35GtO07qn36T7X7dZ7b+xmEODNYqgVx2J4rrzO\n+OSiOuOjZ0HqMpVlm+PUFdu49FM7mIyWtIPEfGIzYzWC7zVb+DbNbfLsXzYxOmJtTubrXSC55opK6/2V\nl3ysq9uKvtfsPQ4Su15QaDq5SM/YsH6N4fSOz2aTuswsj/UddXaYGOK3Z5JihNXk7+m2k5wLnCYEVHr0\nRdQLdM9vyWhS6wTp7ekRrXWYOL2uavK95o3Ttkx+PcNnyesZatsNplcd3TL14KkzPSE37rRJ3imuu3Un\nJUfwGkhP3NYuyehts1VnbTOzBPH11zuLiOy0FwSxdx1arP3n4HwN5/2KWiz7n+v+O7DFvPRIoanZkee6\nIPn5ZyRVYs+u0Lt3ZkkkiK9w5pbKtfMRyseuRigfvnZLheFGrtHha++Ngy5qGTCMglEwyAEA1nSNaQ;\n\nDEFINE COMMENT 1\neJwLYmBgaDBqcmwwWhHDbnBpBZDLkKKqZxyj8drAU1/LQM3mvbGkY53dJOcQv4vOjyKEnQuTZznszd5k\nfrIEpDbCsSn/jCtHyR7viHpj/9QOgwC9/o3+VdNN/Y7OP+KhtGWqk/WxO/YMp1ZYHzy1QE1r1za5JVtB\n+npLJIMmFM8Pm5unl3gi7lKVS4Jkw6c0tU7Psr0zQfLtfaUWZ3o2JN1sv7RiVrvzGZBYS7+WQdVkFudt\nUwR9NGZNrp4979rqwEX2J0FyHH1H53+bwjL/8kL3hSB+2I4+mUk71xhO2nnSDcTX2dAmJrjroNC/AweF\nQPw3x/WMNx19bfDzkJ5x1aFKa4vDzk7fDre5FB11d1114qjz8pNNjs9O1tlpnPxsBlJ/7pKabv+lc+Ug\nds/l98btV/WM7W/ssKq/4ezkeq3LnWEUjIIhCgCnBIVa;\n\nDEFINE COMMENT 2\neJxzYWBgMPXrcv/me9S53qvJscvtqHOwM4/nTYdbQcm2ZukZ1pOrX1lldq+w/jwpwW7ntCqfulm5gXtn\nArUxOFf0ewUXPYr4msqQl5LTVWpXdasBJB6+wMxy2oK9tjPnT/b9ME1t+4/JPpc+T83sXjOjLgckL7qw\nzi5wUZ1d9xJnJ/ZlXe51K9Wiy9Zcqipcd3R+8ua9x6O3+VwCqVOdzTL//Tr72SD2wevXFPfdmCz/4e5k\nea0H05WWPdQySH9oZql7v83l621Bn8brEYG8l2cHc1+JCNx9c3pA/r3ZwSmPlkSC9O741OZS/ZHF2eVd\nm4vb25Nubm9F/Q+9kw39/ukeEJ/1NPs8PeDL55iQtd9SoxhGwSgYYQAAJ3p8Og;\n\nDEFINE COMMENT 3\neJyzY2Bg0LSutC42D/A+YFSX46P3Z4aI9vxNQGGGFda5RrMcKq0nOfN4nnEtTD7uzjCn3uvxFpBcgcXj\ntmDn1A4Q2yolIfxA4vPoGxGlaVU+RwuN/U+WLAnhKV+RJVoLklea4+xUMpXBgbvX3XV6h6DPopZ7oS8b\n3ye+aTiY96ZBsU2zyWfJ0ub5m6Z3/DnG3dt2rqW/7RxI35yzl+RELwjKnbxyTZH1mprusau5Rqcvl1pc\nvlBnN/PcQYfp5+vsTl+2t6+8xeEGUi/y4rVB2PMVeg8eq+k+epSpn/Io1+jRo722cU/s7aWe7bUNfGlk\n5vfK2ubUawYHhlEwCkYBGAAAtVdpPg;\n\nDEFINE COMMENT 4\neJyzZ2Bg4HSfHRzsLBmUbHsvNM/yfaKhxZ8sQ4u2omwrxbYEu/f9513MpjJ6/ZiqHbRlMlA5w4Tia/6C\nxTEhVwsVI55ml6aZp7oXl6V6l6nkBFSC5FNy+iuqqydXg9g/Jjs7ac20ngFiV002s9w2ZYv5mhlbzG/M\n/27pv/iPzeHlR52ZVpx0a1sWESi6MDchfEFh8rQFpWnFa0NqNqy71fB+XUKr4brM7v8r/sy4usBnybJZ\nIatMp05f4zDx2mqQmftuCMrtvnlW+sPds9KZDy7JqTySVV/2UMsg5/574223P5t9vb3DavGjk27yTyb7\nPnicEJ7y6Hl0zv018ea318QzjIJRMAoYACOpcuY;\n\nDEFINE COMMENT 5\neJyzYmBgqDb5Y7PLRCtur/HOaUAuQ5/uGsP7dloG8WFGZqdjd1gxJdbZMSUedb4QPdk3P0Aten3A67h5\nYUcLZcNPliwMFay64lQ13dEoYu1Z3Yi1F3QurQCZMaE4NUqw+H3i1cLv6XF5bUVPs7tKxQtFa9803GsG\nyd+d6+3xePZZz9czpgdsmfo8umbS3mzmCfeaj/Tr9TtM3Dtz52SORbozBFfEzItY+3+F5LpPayHmWt3i\nkNh2u00s/SGHhMzTs9IznokqSj27pbLgsaJW5oPnuqvvvzaY98TaRubpUee4J13uLx70e227HeDNMApG\nwSjACgCouGjl;\n\nDEFINE COMMENT 6\neJzzZWBg0LSWDFpqc7Jkka3kOiCXgV83ItBT/5KPo1G/l6b1Wc+bDoI+TZ6yoXu8V8TUehuldLkx5E13\nvFQFUsvs6V2200e01tj/cZtuoPUM3UD3hcb+k1eW+0asbXd/vCXDesUOR6PUbRN0ZDeC1C/I1YpTzN2Q\n9CLrT9aOFJ7y07ER9fZJ81vOlmj1gOQXzxb0WTmz34thoqBPT8/s4IgOvcSHLe7Fas3zW9SaS6c8aXae\nl9AasFysc/Z6r16lLVumzt8E0he9TVBOcNclOZb9s1X/HVis/efge2PrQ3ttGw7weB7fe83/yg7Z0Fnb\nZEMv7ZwdvP/AkkiQHo6r9oKs1wR9jl1dEQPit1zbYVV/Y4u5+e0t5kZ3v1vm32NxzrkvG/r23pJIo7sr\nYn7fzIxtv5oaxTAKRsEwAgCOt36/;\n\nDEFINE COMMENT 7\neJwzY2BgmOqkFadiuyY+26ow+ZP5n6wdpt5lu0xkm6tN3vdbmu6dqWfZv+y6472NZ1znb3L1kN140HP2\nekav6WuAWhkUc5dEZmbZ5xamh9TYJK/o2p2s1/8ia+e00lqORSD5gxPOejpMTI06OOH5doaJr3fVT5y/\nad/EgOUguarJ9vYas7rcZ8+bHjBxUWbsiaVN+Uwr5rfsWP16F0j+30TFNvuVim0g9u2zPNJTLnRJ1tyc\nLG9++5ri19sxan9vqOmKXii1mH6+0nr3zcm+v29OD+i8ohYddU4rjmEUjIJRQBQAAKgEX28;\n\nDEFINE COMMENT 8\neJyzZGBgkHQU9PluyjAHyGQ46LnFfKePmWWR/x8b3UBnp6wgQR+N4OfRy4Nf98wLC1gOUpNn+T3dw906\na33AzgwQ/3pBRKB83pJI1gSecpaK+S0gsfIp3h4gur9b0OdOm2SQWvPzaL0Gs/RNdSyFm+oCKlc1Krbd\nacvta+/7MRWkzrV/si/zhADvLVND/ED8lv7CiVaTf0w1mmY2NX/650m6M1Z0gcT1jjMIPT7FIHT7LIto\n+PmTEtfO98nInr2mmHVCVj3rxCOt2LMbTI5dPejQfvWos8Alb4+sE5N9GUbBKBgFOAEAjctWiQ;\n\nDEFINE COMMENT 9\neJxzYGBg2G0lYL3byrvsvcX2id/8rXuWhIT0zoyYPwEoxfDIr9okKODl5DY/2wsg/ul4CYOF+cnGkQVT\nTF/kaS9iz3l9HSSemtzWr5a5feKfCog+5gkaUj5tJYm/Gj92WNbEHYuo7PgKElecVm3CuMjQ8NESQ0O7\npdUmj5bsc7oxf/rs2XNebY2bGXfs3fRL10DqJk6/MMl4JcSsvH3PdV33aMVV7po+u3KX8fTPB5a3/jmq\n3SB1Rrvh+dmYpi3nubpOXLgw6c7FvA0qF6fv/X3u4CmpMwuuNJ4wvW1wpP7e5wPpdxfueX39wM5bp0Hm\nCe07p8N+6LnuystbtRlGwSgY4QAAqxx3jQ;\n\nDEFINE LABEL 0\neJwTYGBguJ/72mB15iUfp0SjSSFRmc+BQgxxeffUg4tOlgQWW8/gLPt8wLnC/fz2GsFrLxsnXwfJ1yRP\nXnm94NpqhlEwCkbBkAYAAF4bTQ;\n\nDEFINE LABEL 1\neJxTZmBg8IozMuuJfZ/olNh2DshlqPeytqnyKbWYGZGpvyMlRWdunpru3qodVpY1Bx221ob4faktTN5V\nzZDnXOFd5lcSUgPS0xcT0+SUGFFvlRJRvzrzUtX1gv4Kx8prtaW1S9qXN+2dmdrctfh5k9KWNw1bDm6q\nYzi1t+rkBf6SS9cUc6ffakycfutlUP8VhlEwCkYB3QEAsvA+ew;\n\nDEFINE LABEL 2\neJyTZGBg4OjTM37SrKbLUpGiE1b42mBxjrXN24zJvpvTGPI2p81u1M9omrsiS3JdXN6GfcfL+q80VF67\nuanu3v2IjtQn57ofP9o5OeTGwjlVR4FGMfT0bDA507PFnK3fzLJ8ipnluumfzRhGwSgYBYMWAABvAS6U\n;\n\n"
});