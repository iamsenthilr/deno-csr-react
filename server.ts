import { Application, Router, Context, send } from "oak";
import staticFileMiddleware from './api/middleware/staticFileMiddleware.tsx';
import { fileExists } from './utils/helper.tsx';

const app = new Application();
const PORT: number = Number( Deno.env.get( 'PORT' ) ) || 8080;

// Logger
app.use( async (ctx: Context, next: Function) => {
    await next();
    const rt = ctx.response.headers.get("X-Response-Time");
    console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
} );
  
// Timing
app.use( async (ctx: Context, next: Function) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.response.headers.set("X-Response-Time", `${ms}ms`);
} );

const router = new Router();
router
  .get('/', async ( context: Context ) => {
    const path = `${Deno.cwd()}/public/index.html`;
    context.response.type = 'text/html';
    if( await fileExists( path ) ){
        await send( context, context.request.url.pathname, {
          'root': path
        } );
    }
  });

app.use( staticFileMiddleware )
app.use( router.routes() );
app.use( router.allowedMethods() );

app.addEventListener( 'listen', () => {
  console.log(`Deno Server started at port ${PORT}`);
} );

await app.listen( { port: PORT } );
