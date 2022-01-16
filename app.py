from flask import Flask, render_template

app = Flask(__name__)


@app.route("/ethereum")
def ethereum():
    return render_template("ethereum.html")


@app.route("/solana")
def solana():
    return render_template("solana.html")


if __name__ == "__main__":
    app.run()
