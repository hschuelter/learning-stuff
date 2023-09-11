import requests
import json

url = 'https://pokeapi.co/api/v2/pokemon/'

def fetchData(url):
    data = []
    sprites = []
    for i in range(1,152):
        rawData = requests.get(url + str(i)).json()
        d = filterData(rawData)
        data.append(d)

        sprite = rawData['sprites']['front_default']
        print(sprite)
        sprites.append(sprite)

    return data, sprites

def filterData(rawData):
    data = {
        'name': rawData['name'],
        'types': [],
        'abilities': [],
        'height': rawData['height'],
        'weight': rawData['weight']
    }

    for t in rawData['types']:
        data['types'].append(t['type']['name'])

    for a in rawData['abilities']:
        ab = {}
        ab['name'] = a['ability']['name']
        ab['is_hidden'] = a['is_hidden']

        data['abilities'].append(ab)

    return data

def saveData(data, file):
    json_object = json.dumps(data, indent=2)
 
    # Writing to sample.json
    with open(file, "w") as outfile:
        outfile.write(json_object)

def downloadSprites(sprites):
    i = 1
    print(sprites)

    for s in sprites:
        print(s)
        response = requests.get(s)
        if response.status_code == 200:
            filename = "./img/" + str(i) + '.png' 
            with open(filename, 'wb') as f:
                f.write(response.content)
                print(filename)
                i += 1

data, sprites = fetchData(url)
# saveData(data, 'poke.json')
downloadSprites(sprites)