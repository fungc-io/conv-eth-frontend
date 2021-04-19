# conv-eth-frontend

View demo: <https://conv-eth-pool.surge.sh>
Subgraph: <https://thegraph.com/explorer/subgraph/fungc-io/conv-eth-uniswap>

### To be improved in the future

- To show "Mints" and "Burns" transactions 
- Get better USD estimations by taking average of stablecoins, they're currently estimated by ETH-USDT price only
- Improve UI of charts, the axis labels are unreadable on small screens
- Change chart type of CONV/ETH and ETH/CONV from line chart to candlestick or other more appropiate
- To have global loading state for GraphQL queries, the loading screen is currently controlled by "Chart" widget
- Let user reload data without reloading the page
- Listen to events from MetaMask/web3 after connection


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Run unit test
```
yarn run test:unit
```