import { useConnection, useWallet } from "@solana/wallet-adapter-react"

 export default function Airdrop(){

    const wallet = useWallet();
    const {connection} = useConnection();
    async function sendAirDropToUser() {
        const solInput = document.getElementById("solAmount") as HTMLInputElement | null;
        const solValue = solInput?.value ? Number(solInput.value) : 0;
        if (!solInput || isNaN(solValue) || solValue <= 0) {
            console.error("Invalid SOL amount");
            return;
        }
        if (wallet.publicKey) {
            await connection.requestAirdrop(wallet.publicKey, solValue * 1000000000);
        } else {
            console.error("Wallet public key is null");
        }
    }
    return (
        <>
            <div> 
                {/* Hi,{wallet.publicKey?.toString()} */}
                <input type="text" id="solAmount" placeholder="Amount" />
                <button onClick={sendAirDropToUser}>Send Airdrop</button>
            </div>
        </>
    )
}