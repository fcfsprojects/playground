# Gitbank Playground

Test the Gitbank bot here. Run real commands on Base Sepolia testnet with no real money involved.

> **Testnet only.** Tokens in this environment have no monetary value. Safe to experiment freely.

---

## What is Gitbank?

Gitbank is an AI-powered IssueOps platform for Web3 teams. All vault operations run via bot mentions
in GitHub Issues, PRs, and Discussions. No wallet popups, no gas fees for users.

- Vault on Base L2 anchored to your GitHub permanent user ID
- Soul-bound gitTokens as locked position certificates
- Natural language commands in any language
- Bot replies with a plain-English receipt and Basescan link

---

## Quick start

**Step 1: Just mention the bot**

Open any Issue or Discussion in this repo and write a comment mentioning `@gitbankbot`.
The bot will deploy your vault automatically on your first command. No DApp visit required.

**Step 2: Get testnet tokens**

You need testnet USDC or WETH on Base Sepolia. Free faucets:
- [USDC faucet](https://faucet.circle.com) (select Base Sepolia)
- [Base Sepolia ETH faucet](https://www.alchemy.com/faucets/base-sepolia) (then wrap to WETH at app.uniswap.org)

**Step 3: Run a command**

Write a comment mentioning `@gitbankbot` in any Issue or Discussion:

```
@gitbankbot deposit 10 USDC
```

The bot reads your comment, executes the transaction, and replies with a receipt.

---

## Example commands

```
@gitbankbot balance
@gitbankbot deposit 10 USDC
@gitbankbot deposit 0.005 WETH
@gitbankbot withdraw 5 USDC to 0xYourWalletAddress
@gitbankbot swap 0.001 WETH to USDC
@gitbankbot help
@gitbankbot cancel
```

Commands work in any language. The bot replies in English.

---

## Full command reference

See [COMMANDS.md](COMMANDS.md) for the complete list including project workspace commands.

---

## Links

- Website: [gitbank.io](https://gitbank.io)
- Docs: [gitbank.io/docs](https://gitbank.io/docs)
- Dashboard: [gitbank.io/app/dashboard](https://gitbank.io/app/dashboard)
- Onboarding: [gitbank.io/app/onboarding](https://gitbank.io/app/onboarding)
- Contracts: [github.com/gitbankio/contracts](https://github.com/gitbankio/contracts)

---

## License

Apache 2.0. See [LICENSE](LICENSE).
