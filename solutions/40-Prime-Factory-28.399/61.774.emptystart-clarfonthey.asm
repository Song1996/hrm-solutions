-- HUMAN RESOURCE MACHINE PROGRAM --
-- 40-Prime-Factory - SIZE 61/28 - SPEED 774/399 --

-- This solution is functionally identical to 77.385.cached-clarfonthey.asm,
-- but instead of prefilling the table, the table is generated completely from
-- scratch.

    COPYFROM 24
    COPYTO   23
    COPYTO   20
    COPYTO   0
    BUMPUP   0
    BUMPUP   0
a:
    COPYFROM 24
    COPYTO   22
    INBOX
    COPYTO   19
    JUMP     c
b:
    COMMENT  2
    COPYFROM [22]
    OUTBOX
    BUMPDN   20
    COPYTO   19
    JUMPZ    o
    BUMPUP   19
    COPYFROM 24
    COPYTO   20
c:
    JUMP     e
d:
    COPYFROM 23
    COPYTO   22
    COPYFROM 24
    COPYTO   20
e:
    COMMENT  0
    COPYFROM 19
f:
g:
    SUB      [22]
    JUMPN    h
    COPYTO   21
    BUMPUP   20
    COPYFROM 21
    JUMPZ    b
    JUMP     g
h:
    COMMENT  1
    COPYFROM 23
    SUB      22
    JUMPZ    i
    BUMPUP   22
    COPYFROM 24
    COPYTO   20
    COPYFROM 19
    JUMP     f
i:
    COMMENT  3
    BUMPUP   23
    COPYFROM [22]
    COPYTO   [23]
    BUMPUP   [23]
    COMMENT  5
j:
k:
l:
    SUB      [22]
    JUMPN    n
    JUMPZ    m
    JUMP     l
m:
    COMMENT  7
    COPYFROM 23
    COPYTO   22
    BUMPDN   22
    BUMPUP   [23]
    JUMP     k
n:
    COMMENT  6
    COPYFROM 22
    JUMPZ    d
    BUMPDN   22
    COPYFROM [23]
    JUMP     j
o:
    COMMENT  4
    COPYFROM 23
    COPYTO   22
    JUMP     a


DEFINE COMMENT 0
eJwzZmBgeG6X4FLocDjkpGNYa57ryvNAIYbLGu4OboavzOwdTLV3+Rio7Ag8qgISb47eu8UgmXlRXer3
yetTY3p2pUxptk4SbIiK/990IdaguyLm1dyKmFOr8mKXbpgat3fL/yTd3XoZbvt3ZBofOpB78hDIjO2N
lxvX1/5v+lrd2Hauqr13bhXzoq/Vp1Y5NOfsvNSReoq5U/i8Xce0S8FtrtevNBvdAuuZWedfO1W2T3pq
7sL1U602Ks/sf+wxv/kqSG5lD/Oi4wv1FzOMglEwCkgGAE1hW8A;

DEFINE COMMENT 1
eJyzYGBgmCO/YV+t0rfVJzXbe4/r/awudHjsPtVtqeEmD1l1oDTDJdHlkm6SGqbZ8ozBizTKKr4ZN8yz
d5Da98Ntwuksf9frcaEnboHUTSm7aKRRPiHle1nJhIaKu8v9K9S3HCv7tnp+qWzf9zLGYP+KBvP/Va/M
XCayRx2ebJm0c4pOzs4pn0usJnn2R/aHzL3VE7WEufPUKquqDftA5r2YGbWEf7bpqg9zNy2TX7x/Tu7S
o4tdVi4+AZKbtvBWAYi+u+n75Jitr+Yy7Zy0uXH34d1J++q37dpvtVH/cNJklSP3+xlGwSgYBXgBAEyM
Z1k;

DEFINE COMMENT 2
eJwzYmBgmCK9aZmg8tfDp1UsT35SPX+y3rS/RsxlkzqPK4uysdssZaAShvWp+0zDU1KSw1Mmz/ZN3btl
aVrXEfb06wtK0sJz2dN93WenTzYJzWxXE8jOU+rLParytny1hW8tn2dJXZ3/33rexL/13ycvrZNZxlwY
vJU1R2qfVFbXEZC5shNC5lpNejJNcNqZSezTv0+eNf3JNOWZM3aB5B5MNY4Gq1nxpvXTBo6DazYtPjF9
y9fDW7aJbgeJ/9ryfk/UrusLzu917mAYBaNgFJAFAJ32Vjo;

DEFINE COMMENT 3
eJxTZ2BgWKTR2FZsHdOTYePZf9C2eAVQiCHL/7f3qZDH7mopj90zcl74bc3LDjIpLIx8X7Qyo6LkTWtF
ycxFJoU1z0BqDwXoL34ZeH3Bwgix+WuzxOaDxFQDA57WZPU/ji56cA/Ed5n4YcmjCZ7fpvTVnpvSd32B
7ASuiXMm5XdKTxVvL5z9scdj/s6pmxbfXd64uGfN7flpm8KmbNjHMApGwSigOQAAsXpHyw;

DEFINE COMMENT 4
eJzTZGBgULXsit3n9MJvgetEnx9uL/ysvcoT4kI5V64JT9u0MsZt//zYogP+CW77gUoZmNzUzgR45Ows
CmYrUgqTCvcM32gPEl9Zsi5fvput6NGE5jwQP7rIaYFajdOCo31/Z+2fe2bSxQWe/SDx9jXsUffXtoSl
bQn2m7wvyrZz/12H+gPXAjccqJqedUhprf7hO2B7bHfsOfPySNDZuVe/HmYYBaNgFNAMAAAXQkYT;

DEFINE COMMENT 5
eJyzYGBgCLHLtdpm1+36welnNY/r43W2rj7HgMIM99TTjX85phtn+VcZpEWe1gaJGcdFLUlKXjO/LnXy
bMv03ilZ6ce6l6aFtcqkPqszSD5bJZLIU8kYt7ByS/SzurjQmYtOhXxbHRfKvyEt8vDuipiiA1PjOA5+
zni/RymvdS/IvFn1PJU7axZWzq1SqX1Ucblxd/msrrflsn2J1QIzJjQwL1rbZLXRu2nV9rra+MNqNYtP
gPQ0TBAwFJ74ymzZxM8l/yYZdCvPnLGrepbu7pi5fzaB5FM7Y3qsJom3e8zPbGIYBaNgFOAFAAs0YRc;

DEFINE COMMENT 6
eJzTY2BgCDDwn3bT8NLMUrO0TUus4w8vcP18W9Nd/u4mj9jbXF6u12OiCgrLEkUChNLa7IDKGQqb42Jm
tASmBbddbmTurDg+rXPuQeZOsfmxrV7lZi3sUTNaih1b2ky1L3V8VN3b1a6mPfeITdQiX/dNiyf63Fxi
HF2+5GH8j4XP0/bPlczPnO5V3tRtXgUyd9FmPk/Fbd9cVuyRtj+yT9r+4YFvLhyHgv3+HSpP0D98uVHm
gEE3SN35vTN2MYyCUTAKqAIA+mZQVw;

DEFINE COMMENT 7
eJxTYmBguKi754yh8cutd+2dOx57HMwxD3nhxwAWX+J53SwleYVn5foSP6ZdnwMi90gF6e4GyXFWTfQx
qH6ba1A9c1FHjdS+SdUOO+ZWac7hrDKO/lo90aet0U+/pY1LS6srUefL5Chbn6nFjsXTlng6TYsMVZ1y
Lqmrf07RlWbnjsx6g+6dNbO6GEbBKBgFAwIACEc5cw;

DEFINE LABEL 0
eJyTYWBg6I4/GZ2TdMFLKM3dwTsr1+pJ8QzrG5XznGbVOwSubYqL4W/eVRvfIDZ/UvWFjVPKpPbxFrzf
o5PLtOtzxuN1ehl3l8dnRC0xy7GZubLkfv+rmvbeM/UlE+60z1w0rZNzZWD3t9V+EzbsWzaR42DYlLkH
GUbBKBgFgwoAAO9UNrw;

DEFINE LABEL 1
eJwTZ2BgeBu/0V4ozdGyLbPBvKBgsolYyT5Tm9IPtnmlE31sSrODAosV4u7kZ2Wx5hwvLknrr5FJVakt
KEiuDiwOqHMvYel6UrxshkS+7u6ibIWju1Jqz72Nz754KYLhEsMoGAWjYNADABg5Jns;

DEFINE LABEL 2
eJwTY2BgkEs4re2cxqJsltMoD+QyXIg11RaLac47FlebnpRsmTQxY1vcnfwvMXml5Qm7yyekPKrIylpe
6VW+vNK20b9iVldFicCMSwXXF7DmfFvdlqm0dlcK50qGUTAKRsGQAACR9iRC;

DEFINE LABEL 3
eJzjZWBgUEuJsp2Z88pMpVFZr7DZMmlx8+a+2NbWvb9buo4ApRl+FrJ0aZRrtTB3nq2KWnQlk2EUjIJR
MGwAAB4CFII;

DEFINE LABEL 4
eJyTZGBgOBRwO2JhBLP19Eh3h6fRh0Nux+xJ5Yk9upgxzmEHUJqhNcz4kGW68aGq/KIDIP6Cjj2pyX3B
fn4TKjxcJlp5/ZsUF7N+KufKq9P+bALJz+s9f3L9VLUz+QsmnNbeGn+YYRSMglEwaAEAt3sp9A;

DEFINE LABEL 5
eJyTY2BgmOvlFjHZuyXM0l/R7VDAtcCXgVvK1gVZngRKMXzzzr54IlLnsmX6eTB/fqlbhH/FqoCSOpGA
b31uER1THsbvnGKX+WXy21zZCWUVe7tq6q/VsXQ51X3s+VtvNml1u/7iBR2mqy51pG26035th07rnf0W
9T7HGEbBKBgFgwIAAB4tN54;

DEFINE LABEL 6
eJyTYWBgCPAojPQOmmHNFtLt2h/KHqUUprTWMzxyD1CKgclN53KW/+ITYjF39i9PjNyjkgkRl2za7mbU
N8/pwdR5TtWzElzM5vi6b5m3KoB3wcN43gU/qx1mnzxUPUv1CUhtX6tBt8vEmx0Xd7B0MYyCUTAKBhUA
ACbmKzY;

DEFINE LABEL 7
eJyTZWBg0HYyjt7jLhKwy2ejPYc/n6dq4IbwdUE6OY7BH5YApRkaPXR3z/Y/vPt1SuV6EJ9/9sJKq0n9
NZu7k6s92j+XnGw5mHOv6VySQ7N3fHrLlxj57sLI9VPZo65OM47+M907XnLW8eI1s5w7HGYrrV0za9tR
hlEwCkbBoAEAhhQxSA;

DEFINE LABEL 19
eJwTYWBguJb2LnRxtkNgX+6qAPsCxuAnxexRc6sk8180snSldq6Zz9i3adnVaZuWbZ/JuRKonGF1fuqp
Y2Xb1x6u3jn1U4NXeVX7drdpnXo2Td2vzBhIAGtmNb0lRf0oGAWjgPoAAABGJ28;

DEFINE LABEL 20
eJyTY2Bg+NA6z8mhWcNUpXGHnm+tqXZy2Xcd5sIQs4+5G+3vZUWGZqXLlS1NO9CyNK1q+t/0D0uKsv9s
ulDqc8y3dvEJu44ZuwK7L2zM7Z25aErf/f4pfWUVbj17fY93HrFRbFttUdMkagG0guFBrf+0+IaQuVXt
DjtcJi56wDAKRsEoGBQAAK+dOBM;

DEFINE LABEL 21
eJwTY2BgiC5qMF9YUJt+qWDGLs/8D0s886XCFxY8dp9eaOK8suSug0Z5seOk6u1uNU3ZQTNapML7WrfF
7W/9Wf27pab+YINzh0H1gonClUmTOatC5uq05ux069l2lGEUjIJRMCQAAJ57KIs;

DEFINE LABEL 22
eJwTYmBg+FmoYfo8r9v1SnZX7MvM9l7f1KIDr1OEz3/MNSx+X3Q7wr/isXtZZYWHWs3hkDvty2Y0da/a
zti37ShQK4NjdtJk7yabmQyjYBSMgiEJAK9jIOs;

DEFINE LABEL 23
eJwTY2BgyEqfHvw3/WS0Zfq07JI0sfkTM3Quf874fUovw2FHeErV9CPJMT3hKc/T2NMn+uhlTPRRyrPL
XF/rvjy9pXXvnfZtR0064w/v7Xq/x62neEV5D0N2U7e6L8MoGAWjYEgAANYeKNo;

DEFINE LABEL 24
eJxTYGBgWNBR5/+sbYlnR81kk0cVT/Tv5OdaTcyY6FOSphsSnmKZ9DXZvGp96qyuK9mV66OL7ux/VNF1
JLiN98SCDoWjm7tb97pMLF6ROPlAS+Lksgrhic/TuHtf+P2trzIAGs3QHM2i/Da+V3dtlltEdtX9/pMt
leuPd+rutprUfPXP9HMPGUbBKBgFAwoArDw+KA;