import { Context, send } from "oak";
import { fileExists } from '../../utils/helper.tsx';

const staticFileMiddleware = async ( ctx: Context, next: Function ) => {
    const path = `${Deno.cwd()}/public${ctx.request.url.pathname}`;

    if( await fileExists( path ) ){
        await send( ctx, ctx.request.url.pathname, {
            'root': `${Deno.cwd()}/public`
        } );
    } else {
        await next();
    }
}

export default staticFileMiddleware;
