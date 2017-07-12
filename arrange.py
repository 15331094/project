import os


class product(object):
	"""docstring for product"""
	def __init__(self, name, img_url, description):
		self._name = name
		self._img_url = img_url
		self._detailpageurl = "http://165.227.9.185:80/detail?name=" + name.replace(" ", "-")
		self._description = description
	def get_name(self):
		return self._name
	def get_url(self):
		return self._img_url
	def get_detailpageurl(self):
		return self._detailpageurl
		

def get_product_info():
	#酒柜
	Gradevins_base_dir = "project/static/resources/Gradevin6.16"
	Gradevins = os.listdir(Gradevins_base_dir)
	#酒柜和酒列表
	Gradevins_list = []
	for each_product in Gradevins:
		name = each_product.replace("-", " ")
		imgs = os.listdir(Gradevins_base_dir + "/" + each_product)
		pic_urls_list = []
		for pic_url in imgs:
			pic_urls_list.append(Gradevins_base_dir[8:] + "/" + each_product + "/" + pic_url)
		description = "Digital thermostat with push button controls an digital readout is easy to set and provides accurate temperature control Compact design fits in small spaces easily and requires only 4 of clearance on all sides! Interior LED light and clear glass door allows for optimal viewing Low noise level rating makes this unit a great option for any environment Thermoelectric design is vibration free to help preserve flavor and aroma Excellent customer reviews for superior temperature control Equipped with sliding and removable shelves for custom storage Easily stores up to 28 bottles of your favorite wine Modern design is made from top-quality materials and complements decor."
		new_gradevins = product(name, pic_urls_list, description)
		Gradevins_list.append(new_gradevins)

	#留声机
	Phonographs_base_dir = "project/static/resources/Phonograph6.16"
	Phonographs = os.listdir(Phonographs_base_dir)
	#留声机6.16
	Phonographs_list = []	
	for each_product in Phonographs:
		name = each_product.replace("-", " ")
		imgs = os.listdir(Phonographs_base_dir + "/" + each_product)
		pic_urls_list = []
		for pic_url in imgs:
			pic_urls_list.append(Phonographs_base_dir[8:] + "/" + each_product + "/" + pic_url)
		description = ""
		new_Phonographs = product(name, pic_urls_list, description)
		Phonographs_list.append(new_Phonographs)
	#留声机6.17
	Phonographs_base_dir = "project/static/resources/Phonograph6.17"
	Phonographs = os.listdir(Phonographs_base_dir)

	for each_product in Phonographs:
		name = each_product.replace("-", " ")
		imgs = os.listdir(Phonographs_base_dir + "/" + each_product)
		pic_urls_list = []
		for pic_url in imgs:
			pic_urls_list.append(Phonographs_base_dir[8:] + "/" + each_product + "/" + pic_url)
		description = ""
		new_Phonographs = product(name, pic_urls_list, description)
		Phonographs_list.append(new_Phonographs)

	return Gradevins_list, Phonographs_list

if __name__ == "__main__":
	g, p = get_product_info()
	for i in g:
		print(i.get_name())
		print(i.get_name() + " name url is: ")
		print(i.get_url())
		print("detail is:")
		print(i.get_detailpageurl())
	print()
	for i in p:
		print(i.get_name())
		print(i.get_name() + " name url is: ")
		print(i.get_url())
		print("detail is:")
		print(i.get_detailpageurl())