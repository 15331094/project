from flask import *
from project.arrange import get_product_info
import random
import difflib

application = Flask(__name__)

info = get_product_info()

@application.route("/")
def home():
    Gradevins, Phonographs = info
    Gradevins = Gradevins[:4]
    return render_template("home.html", Gradevins = Gradevins, Phonographs = Phonographs)


@application.route("/phonographs")
def render_phonographs_list():
    Phonographs = info[1]
    #print(len(Phonographs))
    return render_template("list.html", myproducts = Phonographs)

@application.route("/gradevins")
def render_gradevins_list():
    Gradevins = info[0]
    #print(len(Phonographs))
    return render_template("list.html", myproducts = Gradevins)


@application.route("/detail")
def detail():
    name = request.args.get('name')
    print(name)
    Gradevins, Phonographs = info
    products = Gradevins + Phonographs
    for p in products:
        if p._name == name.replace("-", " "):
            return render_template("detail.html", product = p, all_products = products)
    abort(401)

@application.route("/list_search_content")
def list_search_content():
    search = request.args.get('search')
    Gradevins, Phonographs = info
    all_products = Gradevins + Phonographs
    result_products = []
    for product in all_products:
        seq = difflib.SequenceMatcher(lambda x:x==" " or x == "-", product._name, search)
        ratio = seq.ratio()
        if ratio >= 0.55:
            result_products.applicationend(product)
    return render_template("list.html", myproducts = result_products)

@application.route("/search", methods=['POST'])
def search():
    search_product = request.form['word']
    return redirect(url_for('list_search_content', search = search_product))

@application.route("/contact")
def contact():
    info_id = int(request.args.get('info_id'))
    style_id = [["pro1list1hh", "pro1list1"], ["pro1list1", "pro1list1hh"]]
    content_id = [
        [
            "www.ikdeer.com",
            "Email: service@ikdeer.com"
        ],
        ["www.ikdeer.com"]        
    ]
    #return render_template("contact.html")
    if info_id == 0 or info_id == 1:
        return render_template("contact.html", style_id = style_id[info_id], contact_information = content_id[info_id])
    abort(401)

        

if __name__ == "__main__":
    application.run(host = "0.0.0.0", port = 8080)



