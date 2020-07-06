package com.apps;

import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import com.apps.repositories.ICertificationRepository;
import com.apps.repositories.IRessourceRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc(addFilters = false)
@Transactional
@ActiveProfiles(value="test")

public class BaseUnit extends BaseIntegration{
	@MockBean
	protected ICertificationRepository certificationRepository;
	@MockBean
	protected IRessourceRepository ressourceRepository;
}
