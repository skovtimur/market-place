namespace server_app.Presentation.Middlewares;

public class FaviconMiddleware(RequestDelegate next)
{
    public const string PATHTOFAVICON = "/home/timur/Desktop/repositories/NotesFullStackProj/serverApp/favicon.ico";

    public async Task InvokeAsync(HttpContext context)
    {
        if (context.Request.Path.Value == "/favicon.ico")
        {
            if (!File.Exists(PATHTOFAVICON))
            {
                throw new FileNotFoundException($"No icons were found on path {PATHTOFAVICON}" +
                                                "(It is needed, without it, some browsers do not open the site)");
            }

            await context.Response.SendFileAsync(PATHTOFAVICON);
            return;
        }
        await next(context);
    }
}