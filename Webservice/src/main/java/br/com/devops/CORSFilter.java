package br.com.devops;
import java.io.IOException;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

// Enable it for Servlet 3.x implementations
/* @ WebFilter(asyncSupported = true, urlPatterns = { "/*" }) */
@WebFilter(asyncSupported = true, urlPatterns = { "/*" })
public class CORSFilter implements Filter {
 
    public CORSFilter() {}
 
    public void destroy() {}
 
    /**
     * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
     */
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain chain)
            throws IOException, ServletException {
 
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;
 
        // Authorize (allow) all domains to consume the content
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setHeader("Access-Control-Allow-Methods","GET, OPTIONS, HEAD, PUT, POST, DELETE");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Content-Length, Access-Control-Allow-Headers, Authorization, X-Requested-With");
        //EXPOSE HEADER - para acessar os cabecalhos
 
        // For HTTP OPTIONS verb/method reply with ACCEPTED status code -- per CORS handshake
        if (request.getMethod().equals("OPTIONS")) {
        	response.setStatus(HttpServletResponse.SC_ACCEPTED);
        	return;
        }
 
        // pass the request along the filter chain
        chain.doFilter(request, servletResponse);
    }
 
    public void init(FilterConfig fConfig) throws ServletException {}
 
}