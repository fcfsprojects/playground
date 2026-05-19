# Gitbank Playground

Test the Gitbank bot here. Commands execute on **Base mainnet** with real USDC and WETH.

> **Warning.** This is mainnet. Tokens have real monetary value. Only use amounts you are comfortable spending on testing.

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

**Step 2: Bridge assets to Base mainnet**

You need USDC or WETH on Base mainnet. Bridge options:
- [Coinbase Bridge](https://bridge.coinbase.com) (ETH or USDC)
- [Superbridge](https://superbridge.app/base) (ETH, then swap to WETH/USDC on Uniswap)

Already on Base? Skip this step.

**Step 3: Run a command**

Write a comment mentioning `@gitbankbot` in any Issue or Discussion:

```
@gitbankbot deposit 1 USDC
```

The bot reads your comment, executes the transaction on Base mainnet, and replies with a receipt and Basescan link.

---

## Example commands

```
@gitbankbot balance
@gitbankbot deposit 1 USDC
@gitbankbot deposit 0.001 WETH
@gitbankbot withdraw 0.5 USDC to 0xYourWalletAddress
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

MIT. See [LICENSE](LICENSE).
