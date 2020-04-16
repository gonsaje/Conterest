# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Con.destroy_all
User.destroy_all

demo = User.create(email: 'demo@email.com', password: "password",age: 99)
jae = User.create(email: 'jaesong@email.com',password: "password",age: 23)
green = User.create(email: 'green@email.com', password: "password",age: 44)
manny = User.create(email: 'manny@email.com',password: "password",age: 26)
hwatu = User.create(email: 'hwatu@email.com', password: "password",age: 34)
blue = User.create(email: 'blue@email.com',password: "password",age: 65)


c1 = Con.create(author_id: demo.id, title: 'neon' )
file1 = open('https://conterest-seeds.s3.amazonaws.com/Amazing.jpeg')
c1.photo.attach(io: file1, filename: 'Amazing.jpeg')

c2 = Con.create(author_id:demo.id, title: 'arches' )
file2 = open('https://conterest-seeds.s3.amazonaws.com/architect.jpeg')
c2.photo.attach(io: file2, filename: 'architect.jpeg')

c3 = Con.create(author_id:demo.id, title: 'Astronauts!' )
file3 = open('https://conterest-seeds.s3.amazonaws.com/astro.jpeg')
c3.photo.attach(io: file3, filename: 'astro.jpeg')

c4 = Con.create(author_id:demo.id, title: 'blonded')
file4 = open('https://conterest-seeds.s3.amazonaws.com/blonde.jpeg')
c4.photo.attach(io: file4, filename: 'blonde.jpeg')

c5 = Con.create(author_id:demo.id, title: 'B & W' )
file5 = open('https://conterest-seeds.s3.amazonaws.com/bandw.jpeg')
c5.photo.attach(io: file5, filename: 'bandw.jpeg')

c6 = Con.create(author_id:demo.id, title: 'Blazin')
file6 = open('https://conterest-seeds.s3.amazonaws.com/bigsun.jpeg')
c6.photo.attach(io: file6, filename: 'bigsun.jpeg')

c7 = Con.create(author_id:demo.id, title: 'BLU')
file7 = open('https://conterest-seeds.s3.amazonaws.com/Bluedabadee.jpeg')
c7.photo.attach(io: file7, filename: 'Bluedabadee.jpeg')

c8 = Con.create(author_id:jae.id, title: 'ceremony')
file8 = open('https://conterest-seeds.s3.amazonaws.com/ceremony.jpg')
c8.photo.attach(io: file8, filename: 'ceremony.jpg')

c9 = Con.create(author_id:jae.id,  title: 'cherry' )
file9 = open('https://conterest-seeds.s3.amazonaws.com/cherry.jpeg')
c9.photo.attach(io: file9, filename: 'cherry.jpeg')

c10 = Con.create(author_id:jae.id,  title: 'Clouds' )
file10 = open('https://conterest-seeds.s3.amazonaws.com/cloud.jpeg')
c10.photo.attach(io: file10, filename: 'cloud.jpeg')

c11 = Con.create(author_id:jae.id, title: 'Zion' )
file11 = open('https://conterest-seeds.s3.amazonaws.com/Contrast_.jpeg')
c11.photo.attach(io: file11, filename: 'Contrast_.jpeg')

c12 = Con.create(author_id:jae.id, title: 'david')
file12 = open('https://conterest-seeds.s3.amazonaws.com/davi.jpeg')
c12.photo.attach(io: file12, filename: 'davi.jpeg')

c13 = Con.create(author_id:jae.id,title: 'sunset hues')
file13 = open('https://conterest-seeds.s3.amazonaws.com/deepsun.jpeg')
c13.photo.attach(io: file13, filename: 'deepsun.jpeg')

c14 = Con.create(author_id:jae.id, title: 'redsun')
file14 = open('https://conterest-seeds.s3.amazonaws.com/et.jpeg')
c14.photo.attach(io: file14, filename: 'et.jpeg')

c15 = Con.create(author_id:jae.id, title:'falling')
file15 = open('https://conterest-seeds.s3.amazonaws.com/falling.jpeg')
c15.photo.attach(io: file15, filename: 'falling.jpeg')

c16 = Con.create(author_id:jae.id, title: 'dried out' )
file16 = open('https://conterest-seeds.s3.amazonaws.com/flower.jpeg')
c16.photo.attach(io: file16, filename: 'flower.jpeg')

c17 = Con.create(author_id:jae.id, title: 'guy with eye')
file17 = open('https://conterest-seeds.s3.amazonaws.com/freske.jpeg')
c17.photo.attach(io: file17, filename: 'freske.jpeg')

c18 = Con.create(author_id:jae.id, title:'futura' )
file18 = open('https://conterest-seeds.s3.amazonaws.com/futura.jpeg')
c18.photo.attach(io: file18, filename: 'futura.jpeg')

c19 = Con.create(author_id:jae.id, title:'thats just grate' )
file19 = open('https://conterest-seeds.s3.amazonaws.com/grate.jpeg')
c19.photo.attach(io: file19, filename: 'grate.jpeg')

c20 = Con.create(author_id:jae.id, title: 'technicality')
file20 = open('https://conterest-seeds.s3.amazonaws.com/greek.png')
c20.photo.attach(io: file20, filename: 'greek.png')

c21 = Con.create(author_id:jae.id, title:'like liquid' )
file21 = open('https://conterest-seeds.s3.amazonaws.com/Hand.jpeg')
c21.photo.attach(io: file21, filename: 'Hand.jpeg')

c22 = Con.create(author_id:jae.id, title: 'et phone home')
file22 = open('https://conterest-seeds.s3.amazonaws.com/heart.jpeg')
c22.photo.attach(io: file22, filename: 'heart.jpeg')

c23 = Con.create(author_id:jae.id, title: 'city livin')
file23 = open('https://conterest-seeds.s3.amazonaws.com/highrise.jpg')
c23.photo.attach(io: file23, filename: 'highrise.jpg')
# c24 = Con.create(author_id:jae.id, title: )
# c25 = Con.create(author_id:green.id, title: )
# c26 = Con.create(author_id:green.id, title: )
# c27 = Con.create(author_id:green.id, title: )
# c28 = Con.create(author_id:green.id, title: )
# c29 = Con.create(author_id:manny.id, title: )
# c30 = Con.create(author_id:manny.id, title: )
# c31 = Con.create(author_id:manny.id, title: )
# c32 = Con.create(author_id:manny.id, title: )
# c33 = Con.create(author_id:manny.id, title: )
# c34 = Con.create(author_id:manny.id, title: )
# c35 = Con.create(author_id:manny.id, title: )
# c36 = Con.create(author_id:hwatu.id, title: )
# c37 = Con.create(author_id:hwatu.id, title: )
# c38 = Con.create(author_id:hwatu.id, title: )
# c39 = Con.create(author_id:hwatu.id, title: )
# c40 = Con.create(author_id:hwatu.id, title: )
# c41 = Con.create(author_id:hwatu.id, title: )
# c42 = Con.create(author_id:blue.id, title: )
# c43 = Con.create(author_id:blue.id, title: )
# c44 = Con.create(author_id:blue.id, title: )
# c45 = Con.create(author_id:blue.id, title: )
# c46 = Con.create(author_id:blue.id,title: )
# c47 = Con.create(author_id:blue.id, title: )
# c48 = Con.create(author_id:blue.id, title: )
# c49 = Con.create(author_id:blue.id, title: )
# c50 = Con.create(author_id:blue.id, title:)