export const fileExists = async (path: string) => {
    try {
        const stats = await Deno.lstat( path );
        return stats && stats.isFile;
    } catch (error) {
        if( error && error instanceof Deno.errors.NotFound ){
            return false;
        } else {
            throw error;
        }
    }
}