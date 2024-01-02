import { Canister, ic, None, Principal, query, Some, update } from 'azle';
import {
    HttpResponse,
    HttpTransformArgs,
    managementCanister
} from 'azle/canisters/management';

export default Canister({
    memGet: update([], HttpResponse, async (mem_id) => {
        return await ic.call(managementCanister.http_request, {
            args: [
                {
                    url: `https://api.mem.tech/state/${mem_id}`,
                    max_response_bytes: Some(2_000n),
                    method: {
                        get: null
                    },
                    headers: [],
                    body: None,
                    transform: Some({
                        function: [ic.id(), 'memGetTransform'] as [
                            Principal,
                            string
                        ],
                        context: Uint8Array.from([])
                    })
                }
            ],
            cycles: 50_000_000n
        });
    }),
    memGetTransform: query([HttpTransformArgs], HttpResponse, (args) => {
        return {
            ...args.response,
            headers: []
        };
    })
});
