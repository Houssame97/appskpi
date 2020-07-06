package com.apps.security;

public class SecurityParams {
	 public static final String JWT_HEADER_NAME="Authorization";
	    public static final String SECRET="appskpis@dxc";
	    public static final long EXPIRATION=10*24*3600*1000; //10 days
	    public static final String HEADER_PREFIX="Bearer ";
}
