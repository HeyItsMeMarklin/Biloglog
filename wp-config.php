<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '15Be{G7,1-H`r|B=2IC5N$~*v_Iex+Gqj;n~ZEO~C;#AH2ckc||8rBWHYxkZ?{VA' );
define( 'SECURE_AUTH_KEY',  '?}`YAa{bF#7TN-B6RZ& VO>#W}n*im1jKa+;09a>NoR?zn-fPAOANx(%Zlqjk3hm' );
define( 'LOGGED_IN_KEY',    'R=`p[#U4hQGdolyH-qAM@Jp}VvA6twR3~cQ,yD4}frmn(LB].PH4uU[g]%1aAr!L' );
define( 'NONCE_KEY',        'p/qJeyEj%gWFGvgJ&>S5PH=YbJ_}K:E^NoDp9luWb.l,iL(q[,ACqFb4hS RQkBK' );
define( 'AUTH_SALT',        '4@+l*adf!:n<>2iBl1EutA(XZm^gKgLhQaegG:eXy8%0r-94|pva.unoLI#MFAZ@' );
define( 'SECURE_AUTH_SALT', ']5u1)>#f0rP;cR1n>5 5G%w.77C/IK}DsQA3Wt:4ru4CS#$Dew)iK;>c~,vxs(7m' );
define( 'LOGGED_IN_SALT',   'jDPaJ^}MWb4KUaw}I_.qWGe]3(wdM*:S.vNeHp3EKp$&H$Xb0=%ar+BUC}sg{>.d' );
define( 'NONCE_SALT',       '/zs*A|jg]Njs~9|0O@RlW&AwznTDT=i[&!~Vq&jjgb?KbA]qeQ_ yR%0[;@l}9Jk' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
