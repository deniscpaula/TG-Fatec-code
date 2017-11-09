package br.com.devops.test;

import static org.junit.Assert.*;

import java.math.BigInteger;
import java.security.SecureRandom;
import java.util.Date;

import org.junit.Test;

public class GeneralTeste {
	private SecureRandom random = new SecureRandom();
	
	@Test
	public void test() {
//		System.out.println((Long.toHexString(new BigInteger(32, random).longValue())));
//		assertTrue(true);
		
		System.out.println(new Date());
	}

}
