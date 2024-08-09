const hardhat = require('hardhat')
const { extendConfig } = require('hardhat/config')
const { TASK_NODE_GET_PROVIDER } = require('hardhat/builtin-tasks/task-names')

async function main() {
  const chainId = 42161

  const hardhatProvider = await hardhat.run(TASK_NODE_GET_PROVIDER, {
    chainId
  })
  console.log('hardhatProvider', hardhatProvider);

  const txHash = '0x9508a51823c1bc388446dfe412bd7356155943368b9025d869cde49fb986a5bb'
  const traceResult = await hardhatProvider.send('debug_traceTransaction', [txHash])

  console.log(`Finished debug_traceTransaction for ${chainId}/${txHash} with ${traceResult.structLogs.length} structLogs`)

}


main().then(() => console.log('don')).catch(e => console.error(e))
