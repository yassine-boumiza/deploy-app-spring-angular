package com.oauth.demo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
<<<<<<< HEAD
                .allowedOrigins("http://192.168.0.95:4200") // Add your allowed origins here
=======
                .allowedOrigins("http://http://192.168.0.95/:4200") // Add your allowed origins here
>>>>>>> 7ed04bdaf955748f706bd85c8a0bef7bc7a2e733
                .allowedMethods("GET", "POST", "PUT", "DELETE")
                .allowedHeaders("*");
    }
}
