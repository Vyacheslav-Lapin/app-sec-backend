package ru.vlapin.trainings.appsecbackend.dao;

import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import ru.vlapin.trainings.appsecbackend.model.Cat;

public interface CatRepository extends JpaRepository<Cat, UUID> {
}
