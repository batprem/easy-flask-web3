const NETWORK = "https://api.devnet.solana.com/"
const connection = new solanaWeb3.Connection(NETWORK);
await phantom.solana.connect()


let transaction2 = new solanaWeb3.Transaction().add(
    solanaWeb3.SystemProgram.transfer({
        fromPubkey: phantom.solana.publicKey,
        toPubkey: phantom.solana.publicKey,
        lamports: 100,
    })
);


transaction2.recentBlockhash = (
    await connection.getRecentBlockhash()
).blockhash

transaction2.feePayer = phantom.solana.publicKey;
const signedTransaction = await phantom.solana.signTransaction(transaction2)