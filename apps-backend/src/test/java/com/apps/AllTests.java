package com.apps;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

import com.apps.integrationTests.CertificationIntegrationTests;
import com.apps.integrationTests.RessourceIntegrationTests;
import com.apps.unitTests.CertificationControllerUnitTests;
import com.apps.unitTests.RessourceControllerUnitTests;

@RunWith(Suite.class)
@SuiteClasses({
	CertificationIntegrationTests.class,
	CertificationControllerUnitTests.class,
	RessourceIntegrationTests.class,
	RessourceControllerUnitTests.class,
	})

public class AllTests {

}
