# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import warnings
import pulumi
import pulumi.runtime
from typing import Any, Mapping, Optional, Sequence, Union, overload
from .. import _utilities
from . import outputs
from ._inputs import *

__all__ = ['CatalogDatabaseArgs', 'CatalogDatabase']

@pulumi.input_type
class CatalogDatabaseArgs:
    def __init__(__self__, *,
                 catalog_id: Optional[pulumi.Input[str]] = None,
                 description: Optional[pulumi.Input[str]] = None,
                 location_uri: Optional[pulumi.Input[str]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 parameters: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
                 target_database: Optional[pulumi.Input['CatalogDatabaseTargetDatabaseArgs']] = None):
        """
        The set of arguments for constructing a CatalogDatabase resource.
        :param pulumi.Input[str] catalog_id: ID of the Data Catalog in which the database resides.
        :param pulumi.Input[str] description: Description of the database.
        :param pulumi.Input[str] location_uri: Location of the database (for example, an HDFS path).
        :param pulumi.Input[str] name: Name of the database. The acceptable characters are lowercase letters, numbers, and the underscore character.
        :param pulumi.Input[Mapping[str, pulumi.Input[str]]] parameters: List of key-value pairs that define parameters and properties of the database.
        :param pulumi.Input['CatalogDatabaseTargetDatabaseArgs'] target_database: Configuration block for a target database for resource linking. See `target_database` below.
        """
        if catalog_id is not None:
            pulumi.set(__self__, "catalog_id", catalog_id)
        if description is not None:
            pulumi.set(__self__, "description", description)
        if location_uri is not None:
            pulumi.set(__self__, "location_uri", location_uri)
        if name is not None:
            pulumi.set(__self__, "name", name)
        if parameters is not None:
            pulumi.set(__self__, "parameters", parameters)
        if target_database is not None:
            pulumi.set(__self__, "target_database", target_database)

    @property
    @pulumi.getter(name="catalogId")
    def catalog_id(self) -> Optional[pulumi.Input[str]]:
        """
        ID of the Data Catalog in which the database resides.
        """
        return pulumi.get(self, "catalog_id")

    @catalog_id.setter
    def catalog_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "catalog_id", value)

    @property
    @pulumi.getter
    def description(self) -> Optional[pulumi.Input[str]]:
        """
        Description of the database.
        """
        return pulumi.get(self, "description")

    @description.setter
    def description(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "description", value)

    @property
    @pulumi.getter(name="locationUri")
    def location_uri(self) -> Optional[pulumi.Input[str]]:
        """
        Location of the database (for example, an HDFS path).
        """
        return pulumi.get(self, "location_uri")

    @location_uri.setter
    def location_uri(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "location_uri", value)

    @property
    @pulumi.getter
    def name(self) -> Optional[pulumi.Input[str]]:
        """
        Name of the database. The acceptable characters are lowercase letters, numbers, and the underscore character.
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "name", value)

    @property
    @pulumi.getter
    def parameters(self) -> Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]]:
        """
        List of key-value pairs that define parameters and properties of the database.
        """
        return pulumi.get(self, "parameters")

    @parameters.setter
    def parameters(self, value: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]]):
        pulumi.set(self, "parameters", value)

    @property
    @pulumi.getter(name="targetDatabase")
    def target_database(self) -> Optional[pulumi.Input['CatalogDatabaseTargetDatabaseArgs']]:
        """
        Configuration block for a target database for resource linking. See `target_database` below.
        """
        return pulumi.get(self, "target_database")

    @target_database.setter
    def target_database(self, value: Optional[pulumi.Input['CatalogDatabaseTargetDatabaseArgs']]):
        pulumi.set(self, "target_database", value)


@pulumi.input_type
class _CatalogDatabaseState:
    def __init__(__self__, *,
                 arn: Optional[pulumi.Input[str]] = None,
                 catalog_id: Optional[pulumi.Input[str]] = None,
                 description: Optional[pulumi.Input[str]] = None,
                 location_uri: Optional[pulumi.Input[str]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 parameters: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
                 target_database: Optional[pulumi.Input['CatalogDatabaseTargetDatabaseArgs']] = None):
        """
        Input properties used for looking up and filtering CatalogDatabase resources.
        :param pulumi.Input[str] arn: ARN of the Glue Catalog Database.
        :param pulumi.Input[str] catalog_id: ID of the Data Catalog in which the database resides.
        :param pulumi.Input[str] description: Description of the database.
        :param pulumi.Input[str] location_uri: Location of the database (for example, an HDFS path).
        :param pulumi.Input[str] name: Name of the database. The acceptable characters are lowercase letters, numbers, and the underscore character.
        :param pulumi.Input[Mapping[str, pulumi.Input[str]]] parameters: List of key-value pairs that define parameters and properties of the database.
        :param pulumi.Input['CatalogDatabaseTargetDatabaseArgs'] target_database: Configuration block for a target database for resource linking. See `target_database` below.
        """
        if arn is not None:
            pulumi.set(__self__, "arn", arn)
        if catalog_id is not None:
            pulumi.set(__self__, "catalog_id", catalog_id)
        if description is not None:
            pulumi.set(__self__, "description", description)
        if location_uri is not None:
            pulumi.set(__self__, "location_uri", location_uri)
        if name is not None:
            pulumi.set(__self__, "name", name)
        if parameters is not None:
            pulumi.set(__self__, "parameters", parameters)
        if target_database is not None:
            pulumi.set(__self__, "target_database", target_database)

    @property
    @pulumi.getter
    def arn(self) -> Optional[pulumi.Input[str]]:
        """
        ARN of the Glue Catalog Database.
        """
        return pulumi.get(self, "arn")

    @arn.setter
    def arn(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "arn", value)

    @property
    @pulumi.getter(name="catalogId")
    def catalog_id(self) -> Optional[pulumi.Input[str]]:
        """
        ID of the Data Catalog in which the database resides.
        """
        return pulumi.get(self, "catalog_id")

    @catalog_id.setter
    def catalog_id(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "catalog_id", value)

    @property
    @pulumi.getter
    def description(self) -> Optional[pulumi.Input[str]]:
        """
        Description of the database.
        """
        return pulumi.get(self, "description")

    @description.setter
    def description(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "description", value)

    @property
    @pulumi.getter(name="locationUri")
    def location_uri(self) -> Optional[pulumi.Input[str]]:
        """
        Location of the database (for example, an HDFS path).
        """
        return pulumi.get(self, "location_uri")

    @location_uri.setter
    def location_uri(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "location_uri", value)

    @property
    @pulumi.getter
    def name(self) -> Optional[pulumi.Input[str]]:
        """
        Name of the database. The acceptable characters are lowercase letters, numbers, and the underscore character.
        """
        return pulumi.get(self, "name")

    @name.setter
    def name(self, value: Optional[pulumi.Input[str]]):
        pulumi.set(self, "name", value)

    @property
    @pulumi.getter
    def parameters(self) -> Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]]:
        """
        List of key-value pairs that define parameters and properties of the database.
        """
        return pulumi.get(self, "parameters")

    @parameters.setter
    def parameters(self, value: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]]):
        pulumi.set(self, "parameters", value)

    @property
    @pulumi.getter(name="targetDatabase")
    def target_database(self) -> Optional[pulumi.Input['CatalogDatabaseTargetDatabaseArgs']]:
        """
        Configuration block for a target database for resource linking. See `target_database` below.
        """
        return pulumi.get(self, "target_database")

    @target_database.setter
    def target_database(self, value: Optional[pulumi.Input['CatalogDatabaseTargetDatabaseArgs']]):
        pulumi.set(self, "target_database", value)


class CatalogDatabase(pulumi.CustomResource):
    @overload
    def __init__(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 catalog_id: Optional[pulumi.Input[str]] = None,
                 description: Optional[pulumi.Input[str]] = None,
                 location_uri: Optional[pulumi.Input[str]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 parameters: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
                 target_database: Optional[pulumi.Input[pulumi.InputType['CatalogDatabaseTargetDatabaseArgs']]] = None,
                 __props__=None):
        """
        Provides a Glue Catalog Database Resource. You can refer to the [Glue Developer Guide](http://docs.aws.amazon.com/glue/latest/dg/populate-data-catalog.html) for a full explanation of the Glue Data Catalog functionality

        ## Example Usage

        ```python
        import pulumi
        import pulumi_aws as aws

        aws_glue_catalog_database = aws.glue.CatalogDatabase("awsGlueCatalogDatabase", name="MyCatalogDatabase")
        ```

        ## Import

        Glue Catalog Databases can be imported using the `catalog_id:name`. If you have not set a Catalog ID specify the AWS Account ID that the database is in, e.g.

        ```sh
         $ pulumi import aws:glue/catalogDatabase:CatalogDatabase database 123456789012:my_database
        ```

        :param str resource_name: The name of the resource.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] catalog_id: ID of the Data Catalog in which the database resides.
        :param pulumi.Input[str] description: Description of the database.
        :param pulumi.Input[str] location_uri: Location of the database (for example, an HDFS path).
        :param pulumi.Input[str] name: Name of the database. The acceptable characters are lowercase letters, numbers, and the underscore character.
        :param pulumi.Input[Mapping[str, pulumi.Input[str]]] parameters: List of key-value pairs that define parameters and properties of the database.
        :param pulumi.Input[pulumi.InputType['CatalogDatabaseTargetDatabaseArgs']] target_database: Configuration block for a target database for resource linking. See `target_database` below.
        """
        ...
    @overload
    def __init__(__self__,
                 resource_name: str,
                 args: Optional[CatalogDatabaseArgs] = None,
                 opts: Optional[pulumi.ResourceOptions] = None):
        """
        Provides a Glue Catalog Database Resource. You can refer to the [Glue Developer Guide](http://docs.aws.amazon.com/glue/latest/dg/populate-data-catalog.html) for a full explanation of the Glue Data Catalog functionality

        ## Example Usage

        ```python
        import pulumi
        import pulumi_aws as aws

        aws_glue_catalog_database = aws.glue.CatalogDatabase("awsGlueCatalogDatabase", name="MyCatalogDatabase")
        ```

        ## Import

        Glue Catalog Databases can be imported using the `catalog_id:name`. If you have not set a Catalog ID specify the AWS Account ID that the database is in, e.g.

        ```sh
         $ pulumi import aws:glue/catalogDatabase:CatalogDatabase database 123456789012:my_database
        ```

        :param str resource_name: The name of the resource.
        :param CatalogDatabaseArgs args: The arguments to use to populate this resource's properties.
        :param pulumi.ResourceOptions opts: Options for the resource.
        """
        ...
    def __init__(__self__, resource_name: str, *args, **kwargs):
        resource_args, opts = _utilities.get_resource_args_opts(CatalogDatabaseArgs, pulumi.ResourceOptions, *args, **kwargs)
        if resource_args is not None:
            __self__._internal_init(resource_name, opts, **resource_args.__dict__)
        else:
            __self__._internal_init(resource_name, *args, **kwargs)

    def _internal_init(__self__,
                 resource_name: str,
                 opts: Optional[pulumi.ResourceOptions] = None,
                 catalog_id: Optional[pulumi.Input[str]] = None,
                 description: Optional[pulumi.Input[str]] = None,
                 location_uri: Optional[pulumi.Input[str]] = None,
                 name: Optional[pulumi.Input[str]] = None,
                 parameters: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
                 target_database: Optional[pulumi.Input[pulumi.InputType['CatalogDatabaseTargetDatabaseArgs']]] = None,
                 __props__=None):
        if opts is None:
            opts = pulumi.ResourceOptions()
        if not isinstance(opts, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')
        if opts.version is None:
            opts.version = _utilities.get_version()
        if opts.id is None:
            if __props__ is not None:
                raise TypeError('__props__ is only valid when passed in combination with a valid opts.id to get an existing resource')
            __props__ = CatalogDatabaseArgs.__new__(CatalogDatabaseArgs)

            __props__.__dict__["catalog_id"] = catalog_id
            __props__.__dict__["description"] = description
            __props__.__dict__["location_uri"] = location_uri
            __props__.__dict__["name"] = name
            __props__.__dict__["parameters"] = parameters
            __props__.__dict__["target_database"] = target_database
            __props__.__dict__["arn"] = None
        super(CatalogDatabase, __self__).__init__(
            'aws:glue/catalogDatabase:CatalogDatabase',
            resource_name,
            __props__,
            opts)

    @staticmethod
    def get(resource_name: str,
            id: pulumi.Input[str],
            opts: Optional[pulumi.ResourceOptions] = None,
            arn: Optional[pulumi.Input[str]] = None,
            catalog_id: Optional[pulumi.Input[str]] = None,
            description: Optional[pulumi.Input[str]] = None,
            location_uri: Optional[pulumi.Input[str]] = None,
            name: Optional[pulumi.Input[str]] = None,
            parameters: Optional[pulumi.Input[Mapping[str, pulumi.Input[str]]]] = None,
            target_database: Optional[pulumi.Input[pulumi.InputType['CatalogDatabaseTargetDatabaseArgs']]] = None) -> 'CatalogDatabase':
        """
        Get an existing CatalogDatabase resource's state with the given name, id, and optional extra
        properties used to qualify the lookup.

        :param str resource_name: The unique name of the resulting resource.
        :param pulumi.Input[str] id: The unique provider ID of the resource to lookup.
        :param pulumi.ResourceOptions opts: Options for the resource.
        :param pulumi.Input[str] arn: ARN of the Glue Catalog Database.
        :param pulumi.Input[str] catalog_id: ID of the Data Catalog in which the database resides.
        :param pulumi.Input[str] description: Description of the database.
        :param pulumi.Input[str] location_uri: Location of the database (for example, an HDFS path).
        :param pulumi.Input[str] name: Name of the database. The acceptable characters are lowercase letters, numbers, and the underscore character.
        :param pulumi.Input[Mapping[str, pulumi.Input[str]]] parameters: List of key-value pairs that define parameters and properties of the database.
        :param pulumi.Input[pulumi.InputType['CatalogDatabaseTargetDatabaseArgs']] target_database: Configuration block for a target database for resource linking. See `target_database` below.
        """
        opts = pulumi.ResourceOptions.merge(opts, pulumi.ResourceOptions(id=id))

        __props__ = _CatalogDatabaseState.__new__(_CatalogDatabaseState)

        __props__.__dict__["arn"] = arn
        __props__.__dict__["catalog_id"] = catalog_id
        __props__.__dict__["description"] = description
        __props__.__dict__["location_uri"] = location_uri
        __props__.__dict__["name"] = name
        __props__.__dict__["parameters"] = parameters
        __props__.__dict__["target_database"] = target_database
        return CatalogDatabase(resource_name, opts=opts, __props__=__props__)

    @property
    @pulumi.getter
    def arn(self) -> pulumi.Output[str]:
        """
        ARN of the Glue Catalog Database.
        """
        return pulumi.get(self, "arn")

    @property
    @pulumi.getter(name="catalogId")
    def catalog_id(self) -> pulumi.Output[str]:
        """
        ID of the Data Catalog in which the database resides.
        """
        return pulumi.get(self, "catalog_id")

    @property
    @pulumi.getter
    def description(self) -> pulumi.Output[Optional[str]]:
        """
        Description of the database.
        """
        return pulumi.get(self, "description")

    @property
    @pulumi.getter(name="locationUri")
    def location_uri(self) -> pulumi.Output[str]:
        """
        Location of the database (for example, an HDFS path).
        """
        return pulumi.get(self, "location_uri")

    @property
    @pulumi.getter
    def name(self) -> pulumi.Output[str]:
        """
        Name of the database. The acceptable characters are lowercase letters, numbers, and the underscore character.
        """
        return pulumi.get(self, "name")

    @property
    @pulumi.getter
    def parameters(self) -> pulumi.Output[Optional[Mapping[str, str]]]:
        """
        List of key-value pairs that define parameters and properties of the database.
        """
        return pulumi.get(self, "parameters")

    @property
    @pulumi.getter(name="targetDatabase")
    def target_database(self) -> pulumi.Output[Optional['outputs.CatalogDatabaseTargetDatabase']]:
        """
        Configuration block for a target database for resource linking. See `target_database` below.
        """
        return pulumi.get(self, "target_database")

