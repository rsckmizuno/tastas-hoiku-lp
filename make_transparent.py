from PIL import Image

def remove_white_background(input_path, output_path, tolerance=20):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    
    data = img.getdata()
    new_data = []
    
    for item in data:
        # Check if the pixel is white (or very close to white)
        # item is (R, G, B, A)
        if item[0] > 255 - tolerance and item[1] > 255 - tolerance and item[2] > 255 - tolerance:
            # Change to transparent
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Saved {output_path}")

input_img = "images/usage_illustrations_row.png"
output_img = "images/usage_illustrations_row.png"
remove_white_background(input_img, output_img, tolerance=20)
