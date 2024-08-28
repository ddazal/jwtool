# JWTool

JWTool is a simple command-line interface (CLI) application for working with JSON Web Tokens (JWTs). It provides easy-to-use commands for signing and decoding JWTs.

## Installation

You can install JWTool globally using npm:

```bash
npm install -g @ddazal/jwtool
```

## Usage

JWTool provides three main commands: `sign`, `decode`, and `help`.

### Signing a JWT

To create a signed JWT:

```bash
jwtool sign <payload> <key>
```

- `<payload>`: The payload to be encoded in the JWT. This can be a JSON string or a simple string.
- `<key>`: The secret key used to sign the JWT.

Example:

```bash
jwtool sign '{"user":"john","role":"admin"}' mysecretkey
```

This will output the signed JWT.

### Decoding a JWT

To decode and verify a JWT:

```bash
jwtool decode <token> <key>
```

- `<token>`: The JWT to be decoded and verified.
- `<key>`: The secret key used to verify the JWT's signature.

Example:

```bash
jwtool decode eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... mysecretkey
```

This will output the decoded payload if the signature is valid.

### Getting Help

To see help information and a list of available commands:

```bash
jwtool help
```

You can also use `jwtool --help` to see the same information.

## Error Handling

JWTool will display error messages if:

- The payload cannot be parsed as JSON (in which case it will use the raw string).
- The JWT signing process fails.
- The JWT decoding or verification process fails.

## Dependencies

JWTool uses the following npm packages:

- `jsonwebtoken`: For JWT operations
- `yargs`: For parsing command-line arguments

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.


---

For more information on JSON Web Tokens, visit [jwt.io](https://jwt.io/).