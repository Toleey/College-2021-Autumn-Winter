import org.junit.jupiter.api.Test;
import redis.clients.jedis.Jedis;

public class JedisTest {

    @Test
    public void testJedis(){
        Jedis jedis = new Jedis("127.0.0.1",6379);
        //jedis.set("name","叙稻尘");
        String name = jedis.get("name");
        jedis.close();
        System.out.println(name);
    }
}
