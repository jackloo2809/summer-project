# Generated by Django 3.0.7 on 2020-06-26 13:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0003_post_catagory'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='catagory',
            field=models.CharField(choices=[('All', 'All'), ('Web', 'Website'), ('Uni', 'University')], default='All', max_length=200),
        ),
    ]