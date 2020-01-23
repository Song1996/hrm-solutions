callback({
  "levelNumber": 32,
  "size": 72,
  "steps": 223,
  "successRatio": 1,
  "type": "lookuptable",
  "legal": true,
  "worky": true,
  "author": "michiexile",
  "hash": "a5a433dc22234b26e11652a3e43951ed",
  "path": "32-Inventory-Report-16.393/72.223.lookuptable-michiexile.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 32-Inventory-Report - SIZE 72/16 - SPEED 233/393 --\n\n-- so this one runs QUICKLY (223 steps vs. expected 393)\n-- but it is LONG (partially b/c no numeric literals; could probably done it slightly quicker) with 72 instructions vs. expected 16.\n-- floor registers are used as:\n-- 15: count of A\n-- 16: count of B\n-- 17: count of C\n-- 18: count of X\n-- 1: reference copy of A\n-- 2: reference copy of X\n-- 3: reference copy of B\n-- 4: reference copy of C\n-- 14: current floor tile reference\n-- 13: end of populated floor tiles\n-- 19: current query reference (because mixed arithmetic is forbidden)\n-- I specifically add the right counter to handle the count when blanking out tile 13 to use as a register\n-- I could probably do this without blanking 13, by reusing 19, I think\n\nCOPYFROM 14\nCOPYTO 19\nCOPYTO 18\nCOPYTO 17\nCOPYTO 16\nCOPYTO 15\n-- we need one more register here, remove the B at 13, and register it\nCOPYTO 13\nBUMPUP 16\nBUMPDN 14\n-- oh, and we need to fill 13 with the largest address\nBUMPUP 13\nBUMPUP 13\nBUMPUP 13\nBUMPUP 13\nBUMPUP 13\nBUMPUP 13\nBUMPUP 13\nBUMPUP 13\nBUMPUP 13\nBUMPUP 13\nBUMPUP 13\nBUMPUP 13\nBUMPUP 13\nloop:\nBUMPUP 14\nSUB 13\nJUMPZ done\nCOPYFROM [14]\nSUB 3\nJUMPZ isab\nCOPYFROM [14]\nSUB 1\nJUMPZ isaa\nCOPYFROM [14]\nSUB 2\nJUMPZ isax\nCOPYFROM [14]\nSUB 4\nJUMPZ isac\n-- no more letters if we drop through to this: lookup table done\nJUMP done\nisaa:\nBUMPUP 15\nJUMP loop\nisab:\nBUMPUP 16\nJUMP loop\nisac:\nBUMPUP 17\nJUMP loop\nisax:\nBUMPUP 18\nJUMP loop\ndone:\nINBOX\nCOPYTO 19\nSUB 0\nJUMPZ outb\nCOPYFROM 19\nSUB 1\nJUMPZ outa\nCOPYFROM 19\nSUB 2\nJUMPZ outx\nCOPYFROM 19\nSUB 4\nJUMPZ outc\n-- this is weird, might as well fail or give up\nJUMP done\nouta:\nCOPYFROM 15\nOUTBOX\nJUMP done\noutb:\nCOPYFROM 16\nOUTBOX\nJUMP done\noutc:\nCOPYFROM 17\nOUTBOX\nJUMP done\noutx:\nCOPYFROM 18\nOUTBOX\nJUMP done\n"
});