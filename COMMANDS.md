# Gitbank Bot Command Reference

All commands are sent as GitHub comments mentioning `@gitbankbot`.
Commands work in any language. Receipts are always in English.

---

## Personal Vault

### Check balance

```
@gitbankbot balance
```

Shows your locked balances for all supported tokens (gitUSDC, gitWETH, etc.).

---

### Deposit (gitShield)

```
@gitbankbot deposit 50 USDC
@gitbankbot deposit 0.01 WETH
```

Locks tokens into your vault. The bot replies with your owner address.
Send the tokens there and the bot locks them automatically within 30 seconds.
Supports any ERC-20. A 0.10% protocol fee applies (minimum $0.05).

To cancel a pending deposit before it is detected:

```
@gitbankbot cancel
```

---

### Withdraw (gitUnshield)

```
@gitbankbot withdraw 50 USDC to 0xYourWalletAddress
@gitbankbot withdraw 0.01 WETH to 0xYourWalletAddress
```

Burns gitTokens and sends the underlying tokens to your specified wallet.
A 0.10% protocol fee applies (minimum $0.05).
The destination must be a 0x wallet address on Base.

---

### Swap (gitSwap)

```
@gitbankbot swap 0.01 WETH to USDC
@gitbankbot swap 30 USDC to WETH
```

Swaps locked tokens inside your vault via DEX routing. Burns input gitTokens,
routes through Aerodrome or Uniswap, mints output gitTokens.
A 0.30% protocol fee applies (minimum $0.10).
Swap output is limited to WETH or USDC (enforced on-chain).

---

### Transfer to contributor

```
@gitbankbot send 20 USDC to @alice
```

Transfers locked tokens from your vault to another Gitbank user's vault.
Uses a 2-step commit-reveal pattern to prevent front-running.
No fee.

---

### Transaction history

```
@gitbankbot history
```

Links to your full transaction history on the dashboard.

---

### Help

```
@gitbankbot help
```

Shows a quick reference in the thread.

---

## Project Workspace

### Create a project

```
@gitbankbot create project 'Sprint 1' with 500 USDC budget
```

Creates a project with a locked USDC budget in your vault.

---

### Assign a bounty

```
@gitbankbot assign this task to @alice with 80 USDC bounty
```

Allocates a portion of project budget as a bounty for a contributor.
The bounty is locked on-chain until the PR is merged or the task is cancelled.

---

### Auto-payout on PR merge

When a PR linked to a bounty is merged, the bot automatically pays the contributor.
No command needed. It triggers automatically on the `pull_request` merged event.

---

### Cancel a task and reclaim bounty

```
@gitbankbot cancel this task and reclaim bounty
```

Cancels the task, unallocates the bounty, and returns funds to the project budget.

---

### Project status

```
@gitbankbot project status Sprint 1
```

Shows budget used, tasks assigned, completed, and cancelled for the project.

---

## Multilingual examples

The bot understands commands in any language:

| Language | Example |
|---|---|
| Indonesian | `@gitbankbot deposit 50 USDC` |
| Japanese | `@gitbankbot 0.01 WETHをデポジットする` |
| Chinese | `@gitbankbot 存入 50 USDC` |
| German | `@gitbankbot 50 USDC einzahlen` |
| Spanish | `@gitbankbot depositar 50 USDC` |
| Russian | `@gitbankbot внести 50 USDC` |

---

## Error codes

| Message | Meaning |
|---|---|
| "Vault deploying!" | First-time setup. Wait 30 seconds then repeat your command. |
| "Your vault is still confirming on-chain" | Vault tx not yet confirmed. Wait 30 seconds and try again. |
| "No active pending commands to cancel" | No deposit watcher is running for your account. |
| "Rate limit reached" | 10 commands per hour per account. Try again later. |
| "I could not understand that command" | Rephrase or use `@gitbankbot help` for examples. |
