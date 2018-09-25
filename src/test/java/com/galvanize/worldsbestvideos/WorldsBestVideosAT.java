package com.galvanize.worldsbestvideos;

import org.fluentlenium.adapter.junit.FluentTest;
import org.fluentlenium.core.hook.wait.Wait;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.util.StringUtils;

import java.util.concurrent.TimeUnit;

import static org.assertj.core.api.Assertions.assertThat;


@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment=SpringBootTest.WebEnvironment.RANDOM_PORT)
@Wait
public class WorldsBestVideosAT extends FluentTest {

    @Override
    public WebDriver newWebDriver() {
        System.setProperty("webdriver.chrome.driver", "/Users/nathan.zukoff/bin/chromedriver");
        ChromeOptions opt = new ChromeOptions();
//        opt.addArguments("--headless");
//        opt.addArguments("--disable-gpu");
//        opt.addArguments("--no-sandbox");
//        String path = System.getenv("GOOGLE_CHROME_BIN"); // heroku-specific
//        String path = "/Users/nathan.zukoff/bin";
//        if(!StringUtils.isEmpty(System.getenv("GOOGLE_CHROME_BIN"))) {
//            System.out.println("Setting binary path to: " + path);
//            opt.setBinary(path);
//        }
//        opt.setBinary(path);
        WebDriver driver = new ChromeDriver(opt);
        return driver;
    }

    @Value("${local.server.port}")
    private String port;

    @Test
    public void testHomePage() {
        goTo("http://localhost:" + this.port + "/");
        await().atMost(10, TimeUnit.SECONDS).until(() -> $(".h1").present());
        assertThat($(".h1").text()).isEqualTo("World's Best Videos");
    }


}