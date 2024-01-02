<p align="center">
  <a href="https://mem.tech">
    <img src="https://mem-home.vercel.app/icons/mem/mem-logo-v2.svg" height="180">
  </a>
  <h3 align="center"><code>@decentldotland/mem_canister</code></h3>
  <p align="center">MEM serverless functions fetch canister</p>
</p>



## Prerequisites & Build

```bash
sudo DFX_VERSION=0.15.2 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"

git pull https://github.com/decentldotland/mem_canister.git

npm install

```

## Deploy & Run

```bash
dfx start // start your local replica

dfx deploy mem_canister // in another terminal deploy the canister

dfx canister call mem_canister memGet '("ltKTJCTQc5jvbqwgB1dgw3Sn30ZKT_U1eMZ7dvxHkVY")' // call the getMem method

```

## License
This project is licensed under the [MIT License](./LICENSE)
