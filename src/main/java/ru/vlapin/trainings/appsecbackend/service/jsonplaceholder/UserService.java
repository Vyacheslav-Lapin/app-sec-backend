package ru.vlapin.trainings.appsecbackend.service.jsonplaceholder;

import java.util.List;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import ru.vlapin.trainings.appsecbackend.model.jsonplaceholder.User;

@FeignClient(
    name = "UserJsonPlaceHolder",
    url = "https://jsonplaceholder.typicode.com",
    path = "users")
public interface UserService {

  @GetMapping
  List<User> all();

  @GetMapping("{id}")
  User findById(@PathVariable Long id);
}
