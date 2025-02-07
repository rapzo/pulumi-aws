// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package storagegateway

import (
	"context"
	"reflect"

	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// Manages an AWS Storage Gateway stored iSCSI volume.
//
// > **NOTE:** The gateway must have a working storage added (e.g. via the `storagegateway.WorkingStorage` resource) before the volume is operational to clients, however the Storage Gateway API will allow volume creation without error in that case and return volume status as `WORKING STORAGE NOT CONFIGURED`.
//
// ## Example Usage
// ### Create Empty Stored iSCSI Volume
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-aws/sdk/v4/go/aws/storagegateway"
// 	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		_, err := storagegateway.NewStoredIscsiVolume(ctx, "example", &storagegateway.StoredIscsiVolumeArgs{
// 			GatewayArn:           pulumi.Any(aws_storagegateway_cache.Example.Gateway_arn),
// 			NetworkInterfaceId:   pulumi.Any(aws_instance.Example.Private_ip),
// 			TargetName:           pulumi.String("example"),
// 			PreserveExistingData: pulumi.Bool(false),
// 			DiskId:               pulumi.Any(data.Aws_storagegateway_local_disk.Test.Id),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
// ### Create Stored iSCSI Volume From Snapshot
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-aws/sdk/v4/go/aws/storagegateway"
// 	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		_, err := storagegateway.NewStoredIscsiVolume(ctx, "example", &storagegateway.StoredIscsiVolumeArgs{
// 			GatewayArn:           pulumi.Any(aws_storagegateway_cache.Example.Gateway_arn),
// 			NetworkInterfaceId:   pulumi.Any(aws_instance.Example.Private_ip),
// 			SnapshotId:           pulumi.Any(aws_ebs_snapshot.Example.Id),
// 			TargetName:           pulumi.String("example"),
// 			PreserveExistingData: pulumi.Bool(false),
// 			DiskId:               pulumi.Any(data.Aws_storagegateway_local_disk.Test.Id),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
//
// ## Import
//
// `aws_storagegateway_stored_iscsi_volume` can be imported by using the volume Amazon Resource Name (ARN), e.g.
//
// ```sh
//  $ pulumi import aws:storagegateway/storedIscsiVolume:StoredIscsiVolume example arn:aws:storagegateway:us-east-1:123456789012:gateway/sgw-12345678/volume/vol-12345678
// ```
type StoredIscsiVolume struct {
	pulumi.CustomResourceState

	// Volume Amazon Resource Name (ARN), e.g. `arn:aws:storagegateway:us-east-1:123456789012:gateway/sgw-12345678/volume/vol-12345678`.
	Arn pulumi.StringOutput `pulumi:"arn"`
	// Whether mutual CHAP is enabled for the iSCSI target.
	ChapEnabled pulumi.BoolOutput `pulumi:"chapEnabled"`
	// The unique identifier for the gateway local disk that is configured as a stored volume.
	DiskId pulumi.StringOutput `pulumi:"diskId"`
	// The Amazon Resource Name (ARN) of the gateway.
	GatewayArn pulumi.StringOutput `pulumi:"gatewayArn"`
	// `true` to use Amazon S3 server side encryption with your own AWS KMS key, or `false` to use a key managed by Amazon S3. Optional.
	KmsEncrypted pulumi.BoolPtrOutput `pulumi:"kmsEncrypted"`
	// The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side encryption. This value can only be set when `kmsEncrypted` is `true`.
	KmsKey pulumi.StringPtrOutput `pulumi:"kmsKey"`
	// Logical disk number.
	LunNumber pulumi.IntOutput `pulumi:"lunNumber"`
	// The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted.
	NetworkInterfaceId pulumi.StringOutput `pulumi:"networkInterfaceId"`
	// The port used to communicate with iSCSI targets.
	NetworkInterfacePort pulumi.IntOutput `pulumi:"networkInterfacePort"`
	// Specify this field as `true` if you want to preserve the data on the local disk. Otherwise, specifying this field as false creates an empty volume.
	PreserveExistingData pulumi.BoolOutput `pulumi:"preserveExistingData"`
	// The snapshot ID of the snapshot to restore as the new stored volume. e.g. `snap-1122aabb`.
	SnapshotId pulumi.StringPtrOutput `pulumi:"snapshotId"`
	// Key-value mapping of resource tags. .If configured with a provider `defaultTags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
	Tags pulumi.StringMapOutput `pulumi:"tags"`
	// A map of tags assigned to the resource, including those inherited from the provider .
	TagsAll pulumi.StringMapOutput `pulumi:"tagsAll"`
	// Target Amazon Resource Name (ARN), e.g. `arn:aws:storagegateway:us-east-1:123456789012:gateway/sgw-12345678/target/iqn.1997-05.com.amazon:TargetName`.
	TargetArn pulumi.StringOutput `pulumi:"targetArn"`
	// The name of the iSCSI target used by initiators to connect to the target and as a suffix for the target ARN. The target name must be unique across all volumes of a gateway.
	TargetName pulumi.StringOutput `pulumi:"targetName"`
	// A value that indicates whether a storage volume is attached to, detached from, or is in the process of detaching from a gateway.
	VolumeAttachmentStatus pulumi.StringOutput `pulumi:"volumeAttachmentStatus"`
	// Volume ID, e.g. `vol-12345678`.
	VolumeId pulumi.StringOutput `pulumi:"volumeId"`
	// The size of the data stored on the volume in bytes.
	VolumeSizeInBytes pulumi.IntOutput `pulumi:"volumeSizeInBytes"`
	// indicates the state of the storage volume.
	VolumeStatus pulumi.StringOutput `pulumi:"volumeStatus"`
	// indicates the type of the volume.
	VolumeType pulumi.StringOutput `pulumi:"volumeType"`
}

// NewStoredIscsiVolume registers a new resource with the given unique name, arguments, and options.
func NewStoredIscsiVolume(ctx *pulumi.Context,
	name string, args *StoredIscsiVolumeArgs, opts ...pulumi.ResourceOption) (*StoredIscsiVolume, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.DiskId == nil {
		return nil, errors.New("invalid value for required argument 'DiskId'")
	}
	if args.GatewayArn == nil {
		return nil, errors.New("invalid value for required argument 'GatewayArn'")
	}
	if args.NetworkInterfaceId == nil {
		return nil, errors.New("invalid value for required argument 'NetworkInterfaceId'")
	}
	if args.PreserveExistingData == nil {
		return nil, errors.New("invalid value for required argument 'PreserveExistingData'")
	}
	if args.TargetName == nil {
		return nil, errors.New("invalid value for required argument 'TargetName'")
	}
	var resource StoredIscsiVolume
	err := ctx.RegisterResource("aws:storagegateway/storedIscsiVolume:StoredIscsiVolume", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetStoredIscsiVolume gets an existing StoredIscsiVolume resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetStoredIscsiVolume(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *StoredIscsiVolumeState, opts ...pulumi.ResourceOption) (*StoredIscsiVolume, error) {
	var resource StoredIscsiVolume
	err := ctx.ReadResource("aws:storagegateway/storedIscsiVolume:StoredIscsiVolume", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering StoredIscsiVolume resources.
type storedIscsiVolumeState struct {
	// Volume Amazon Resource Name (ARN), e.g. `arn:aws:storagegateway:us-east-1:123456789012:gateway/sgw-12345678/volume/vol-12345678`.
	Arn *string `pulumi:"arn"`
	// Whether mutual CHAP is enabled for the iSCSI target.
	ChapEnabled *bool `pulumi:"chapEnabled"`
	// The unique identifier for the gateway local disk that is configured as a stored volume.
	DiskId *string `pulumi:"diskId"`
	// The Amazon Resource Name (ARN) of the gateway.
	GatewayArn *string `pulumi:"gatewayArn"`
	// `true` to use Amazon S3 server side encryption with your own AWS KMS key, or `false` to use a key managed by Amazon S3. Optional.
	KmsEncrypted *bool `pulumi:"kmsEncrypted"`
	// The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side encryption. This value can only be set when `kmsEncrypted` is `true`.
	KmsKey *string `pulumi:"kmsKey"`
	// Logical disk number.
	LunNumber *int `pulumi:"lunNumber"`
	// The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted.
	NetworkInterfaceId *string `pulumi:"networkInterfaceId"`
	// The port used to communicate with iSCSI targets.
	NetworkInterfacePort *int `pulumi:"networkInterfacePort"`
	// Specify this field as `true` if you want to preserve the data on the local disk. Otherwise, specifying this field as false creates an empty volume.
	PreserveExistingData *bool `pulumi:"preserveExistingData"`
	// The snapshot ID of the snapshot to restore as the new stored volume. e.g. `snap-1122aabb`.
	SnapshotId *string `pulumi:"snapshotId"`
	// Key-value mapping of resource tags. .If configured with a provider `defaultTags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
	Tags map[string]string `pulumi:"tags"`
	// A map of tags assigned to the resource, including those inherited from the provider .
	TagsAll map[string]string `pulumi:"tagsAll"`
	// Target Amazon Resource Name (ARN), e.g. `arn:aws:storagegateway:us-east-1:123456789012:gateway/sgw-12345678/target/iqn.1997-05.com.amazon:TargetName`.
	TargetArn *string `pulumi:"targetArn"`
	// The name of the iSCSI target used by initiators to connect to the target and as a suffix for the target ARN. The target name must be unique across all volumes of a gateway.
	TargetName *string `pulumi:"targetName"`
	// A value that indicates whether a storage volume is attached to, detached from, or is in the process of detaching from a gateway.
	VolumeAttachmentStatus *string `pulumi:"volumeAttachmentStatus"`
	// Volume ID, e.g. `vol-12345678`.
	VolumeId *string `pulumi:"volumeId"`
	// The size of the data stored on the volume in bytes.
	VolumeSizeInBytes *int `pulumi:"volumeSizeInBytes"`
	// indicates the state of the storage volume.
	VolumeStatus *string `pulumi:"volumeStatus"`
	// indicates the type of the volume.
	VolumeType *string `pulumi:"volumeType"`
}

type StoredIscsiVolumeState struct {
	// Volume Amazon Resource Name (ARN), e.g. `arn:aws:storagegateway:us-east-1:123456789012:gateway/sgw-12345678/volume/vol-12345678`.
	Arn pulumi.StringPtrInput
	// Whether mutual CHAP is enabled for the iSCSI target.
	ChapEnabled pulumi.BoolPtrInput
	// The unique identifier for the gateway local disk that is configured as a stored volume.
	DiskId pulumi.StringPtrInput
	// The Amazon Resource Name (ARN) of the gateway.
	GatewayArn pulumi.StringPtrInput
	// `true` to use Amazon S3 server side encryption with your own AWS KMS key, or `false` to use a key managed by Amazon S3. Optional.
	KmsEncrypted pulumi.BoolPtrInput
	// The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side encryption. This value can only be set when `kmsEncrypted` is `true`.
	KmsKey pulumi.StringPtrInput
	// Logical disk number.
	LunNumber pulumi.IntPtrInput
	// The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted.
	NetworkInterfaceId pulumi.StringPtrInput
	// The port used to communicate with iSCSI targets.
	NetworkInterfacePort pulumi.IntPtrInput
	// Specify this field as `true` if you want to preserve the data on the local disk. Otherwise, specifying this field as false creates an empty volume.
	PreserveExistingData pulumi.BoolPtrInput
	// The snapshot ID of the snapshot to restore as the new stored volume. e.g. `snap-1122aabb`.
	SnapshotId pulumi.StringPtrInput
	// Key-value mapping of resource tags. .If configured with a provider `defaultTags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
	Tags pulumi.StringMapInput
	// A map of tags assigned to the resource, including those inherited from the provider .
	TagsAll pulumi.StringMapInput
	// Target Amazon Resource Name (ARN), e.g. `arn:aws:storagegateway:us-east-1:123456789012:gateway/sgw-12345678/target/iqn.1997-05.com.amazon:TargetName`.
	TargetArn pulumi.StringPtrInput
	// The name of the iSCSI target used by initiators to connect to the target and as a suffix for the target ARN. The target name must be unique across all volumes of a gateway.
	TargetName pulumi.StringPtrInput
	// A value that indicates whether a storage volume is attached to, detached from, or is in the process of detaching from a gateway.
	VolumeAttachmentStatus pulumi.StringPtrInput
	// Volume ID, e.g. `vol-12345678`.
	VolumeId pulumi.StringPtrInput
	// The size of the data stored on the volume in bytes.
	VolumeSizeInBytes pulumi.IntPtrInput
	// indicates the state of the storage volume.
	VolumeStatus pulumi.StringPtrInput
	// indicates the type of the volume.
	VolumeType pulumi.StringPtrInput
}

func (StoredIscsiVolumeState) ElementType() reflect.Type {
	return reflect.TypeOf((*storedIscsiVolumeState)(nil)).Elem()
}

type storedIscsiVolumeArgs struct {
	// The unique identifier for the gateway local disk that is configured as a stored volume.
	DiskId string `pulumi:"diskId"`
	// The Amazon Resource Name (ARN) of the gateway.
	GatewayArn string `pulumi:"gatewayArn"`
	// `true` to use Amazon S3 server side encryption with your own AWS KMS key, or `false` to use a key managed by Amazon S3. Optional.
	KmsEncrypted *bool `pulumi:"kmsEncrypted"`
	// The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side encryption. This value can only be set when `kmsEncrypted` is `true`.
	KmsKey *string `pulumi:"kmsKey"`
	// The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted.
	NetworkInterfaceId string `pulumi:"networkInterfaceId"`
	// Specify this field as `true` if you want to preserve the data on the local disk. Otherwise, specifying this field as false creates an empty volume.
	PreserveExistingData bool `pulumi:"preserveExistingData"`
	// The snapshot ID of the snapshot to restore as the new stored volume. e.g. `snap-1122aabb`.
	SnapshotId *string `pulumi:"snapshotId"`
	// Key-value mapping of resource tags. .If configured with a provider `defaultTags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
	Tags map[string]string `pulumi:"tags"`
	// The name of the iSCSI target used by initiators to connect to the target and as a suffix for the target ARN. The target name must be unique across all volumes of a gateway.
	TargetName string `pulumi:"targetName"`
}

// The set of arguments for constructing a StoredIscsiVolume resource.
type StoredIscsiVolumeArgs struct {
	// The unique identifier for the gateway local disk that is configured as a stored volume.
	DiskId pulumi.StringInput
	// The Amazon Resource Name (ARN) of the gateway.
	GatewayArn pulumi.StringInput
	// `true` to use Amazon S3 server side encryption with your own AWS KMS key, or `false` to use a key managed by Amazon S3. Optional.
	KmsEncrypted pulumi.BoolPtrInput
	// The Amazon Resource Name (ARN) of the AWS KMS key used for Amazon S3 server side encryption. This value can only be set when `kmsEncrypted` is `true`.
	KmsKey pulumi.StringPtrInput
	// The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted.
	NetworkInterfaceId pulumi.StringInput
	// Specify this field as `true` if you want to preserve the data on the local disk. Otherwise, specifying this field as false creates an empty volume.
	PreserveExistingData pulumi.BoolInput
	// The snapshot ID of the snapshot to restore as the new stored volume. e.g. `snap-1122aabb`.
	SnapshotId pulumi.StringPtrInput
	// Key-value mapping of resource tags. .If configured with a provider `defaultTags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
	Tags pulumi.StringMapInput
	// The name of the iSCSI target used by initiators to connect to the target and as a suffix for the target ARN. The target name must be unique across all volumes of a gateway.
	TargetName pulumi.StringInput
}

func (StoredIscsiVolumeArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*storedIscsiVolumeArgs)(nil)).Elem()
}

type StoredIscsiVolumeInput interface {
	pulumi.Input

	ToStoredIscsiVolumeOutput() StoredIscsiVolumeOutput
	ToStoredIscsiVolumeOutputWithContext(ctx context.Context) StoredIscsiVolumeOutput
}

func (*StoredIscsiVolume) ElementType() reflect.Type {
	return reflect.TypeOf((*StoredIscsiVolume)(nil))
}

func (i *StoredIscsiVolume) ToStoredIscsiVolumeOutput() StoredIscsiVolumeOutput {
	return i.ToStoredIscsiVolumeOutputWithContext(context.Background())
}

func (i *StoredIscsiVolume) ToStoredIscsiVolumeOutputWithContext(ctx context.Context) StoredIscsiVolumeOutput {
	return pulumi.ToOutputWithContext(ctx, i).(StoredIscsiVolumeOutput)
}

func (i *StoredIscsiVolume) ToStoredIscsiVolumePtrOutput() StoredIscsiVolumePtrOutput {
	return i.ToStoredIscsiVolumePtrOutputWithContext(context.Background())
}

func (i *StoredIscsiVolume) ToStoredIscsiVolumePtrOutputWithContext(ctx context.Context) StoredIscsiVolumePtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(StoredIscsiVolumePtrOutput)
}

type StoredIscsiVolumePtrInput interface {
	pulumi.Input

	ToStoredIscsiVolumePtrOutput() StoredIscsiVolumePtrOutput
	ToStoredIscsiVolumePtrOutputWithContext(ctx context.Context) StoredIscsiVolumePtrOutput
}

type storedIscsiVolumePtrType StoredIscsiVolumeArgs

func (*storedIscsiVolumePtrType) ElementType() reflect.Type {
	return reflect.TypeOf((**StoredIscsiVolume)(nil))
}

func (i *storedIscsiVolumePtrType) ToStoredIscsiVolumePtrOutput() StoredIscsiVolumePtrOutput {
	return i.ToStoredIscsiVolumePtrOutputWithContext(context.Background())
}

func (i *storedIscsiVolumePtrType) ToStoredIscsiVolumePtrOutputWithContext(ctx context.Context) StoredIscsiVolumePtrOutput {
	return pulumi.ToOutputWithContext(ctx, i).(StoredIscsiVolumePtrOutput)
}

// StoredIscsiVolumeArrayInput is an input type that accepts StoredIscsiVolumeArray and StoredIscsiVolumeArrayOutput values.
// You can construct a concrete instance of `StoredIscsiVolumeArrayInput` via:
//
//          StoredIscsiVolumeArray{ StoredIscsiVolumeArgs{...} }
type StoredIscsiVolumeArrayInput interface {
	pulumi.Input

	ToStoredIscsiVolumeArrayOutput() StoredIscsiVolumeArrayOutput
	ToStoredIscsiVolumeArrayOutputWithContext(context.Context) StoredIscsiVolumeArrayOutput
}

type StoredIscsiVolumeArray []StoredIscsiVolumeInput

func (StoredIscsiVolumeArray) ElementType() reflect.Type {
	return reflect.TypeOf((*[]*StoredIscsiVolume)(nil)).Elem()
}

func (i StoredIscsiVolumeArray) ToStoredIscsiVolumeArrayOutput() StoredIscsiVolumeArrayOutput {
	return i.ToStoredIscsiVolumeArrayOutputWithContext(context.Background())
}

func (i StoredIscsiVolumeArray) ToStoredIscsiVolumeArrayOutputWithContext(ctx context.Context) StoredIscsiVolumeArrayOutput {
	return pulumi.ToOutputWithContext(ctx, i).(StoredIscsiVolumeArrayOutput)
}

// StoredIscsiVolumeMapInput is an input type that accepts StoredIscsiVolumeMap and StoredIscsiVolumeMapOutput values.
// You can construct a concrete instance of `StoredIscsiVolumeMapInput` via:
//
//          StoredIscsiVolumeMap{ "key": StoredIscsiVolumeArgs{...} }
type StoredIscsiVolumeMapInput interface {
	pulumi.Input

	ToStoredIscsiVolumeMapOutput() StoredIscsiVolumeMapOutput
	ToStoredIscsiVolumeMapOutputWithContext(context.Context) StoredIscsiVolumeMapOutput
}

type StoredIscsiVolumeMap map[string]StoredIscsiVolumeInput

func (StoredIscsiVolumeMap) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]*StoredIscsiVolume)(nil)).Elem()
}

func (i StoredIscsiVolumeMap) ToStoredIscsiVolumeMapOutput() StoredIscsiVolumeMapOutput {
	return i.ToStoredIscsiVolumeMapOutputWithContext(context.Background())
}

func (i StoredIscsiVolumeMap) ToStoredIscsiVolumeMapOutputWithContext(ctx context.Context) StoredIscsiVolumeMapOutput {
	return pulumi.ToOutputWithContext(ctx, i).(StoredIscsiVolumeMapOutput)
}

type StoredIscsiVolumeOutput struct{ *pulumi.OutputState }

func (StoredIscsiVolumeOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*StoredIscsiVolume)(nil))
}

func (o StoredIscsiVolumeOutput) ToStoredIscsiVolumeOutput() StoredIscsiVolumeOutput {
	return o
}

func (o StoredIscsiVolumeOutput) ToStoredIscsiVolumeOutputWithContext(ctx context.Context) StoredIscsiVolumeOutput {
	return o
}

func (o StoredIscsiVolumeOutput) ToStoredIscsiVolumePtrOutput() StoredIscsiVolumePtrOutput {
	return o.ToStoredIscsiVolumePtrOutputWithContext(context.Background())
}

func (o StoredIscsiVolumeOutput) ToStoredIscsiVolumePtrOutputWithContext(ctx context.Context) StoredIscsiVolumePtrOutput {
	return o.ApplyTWithContext(ctx, func(_ context.Context, v StoredIscsiVolume) *StoredIscsiVolume {
		return &v
	}).(StoredIscsiVolumePtrOutput)
}

type StoredIscsiVolumePtrOutput struct{ *pulumi.OutputState }

func (StoredIscsiVolumePtrOutput) ElementType() reflect.Type {
	return reflect.TypeOf((**StoredIscsiVolume)(nil))
}

func (o StoredIscsiVolumePtrOutput) ToStoredIscsiVolumePtrOutput() StoredIscsiVolumePtrOutput {
	return o
}

func (o StoredIscsiVolumePtrOutput) ToStoredIscsiVolumePtrOutputWithContext(ctx context.Context) StoredIscsiVolumePtrOutput {
	return o
}

func (o StoredIscsiVolumePtrOutput) Elem() StoredIscsiVolumeOutput {
	return o.ApplyT(func(v *StoredIscsiVolume) StoredIscsiVolume {
		if v != nil {
			return *v
		}
		var ret StoredIscsiVolume
		return ret
	}).(StoredIscsiVolumeOutput)
}

type StoredIscsiVolumeArrayOutput struct{ *pulumi.OutputState }

func (StoredIscsiVolumeArrayOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*[]StoredIscsiVolume)(nil))
}

func (o StoredIscsiVolumeArrayOutput) ToStoredIscsiVolumeArrayOutput() StoredIscsiVolumeArrayOutput {
	return o
}

func (o StoredIscsiVolumeArrayOutput) ToStoredIscsiVolumeArrayOutputWithContext(ctx context.Context) StoredIscsiVolumeArrayOutput {
	return o
}

func (o StoredIscsiVolumeArrayOutput) Index(i pulumi.IntInput) StoredIscsiVolumeOutput {
	return pulumi.All(o, i).ApplyT(func(vs []interface{}) StoredIscsiVolume {
		return vs[0].([]StoredIscsiVolume)[vs[1].(int)]
	}).(StoredIscsiVolumeOutput)
}

type StoredIscsiVolumeMapOutput struct{ *pulumi.OutputState }

func (StoredIscsiVolumeMapOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*map[string]StoredIscsiVolume)(nil))
}

func (o StoredIscsiVolumeMapOutput) ToStoredIscsiVolumeMapOutput() StoredIscsiVolumeMapOutput {
	return o
}

func (o StoredIscsiVolumeMapOutput) ToStoredIscsiVolumeMapOutputWithContext(ctx context.Context) StoredIscsiVolumeMapOutput {
	return o
}

func (o StoredIscsiVolumeMapOutput) MapIndex(k pulumi.StringInput) StoredIscsiVolumeOutput {
	return pulumi.All(o, k).ApplyT(func(vs []interface{}) StoredIscsiVolume {
		return vs[0].(map[string]StoredIscsiVolume)[vs[1].(string)]
	}).(StoredIscsiVolumeOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*StoredIscsiVolumeInput)(nil)).Elem(), &StoredIscsiVolume{})
	pulumi.RegisterInputType(reflect.TypeOf((*StoredIscsiVolumePtrInput)(nil)).Elem(), &StoredIscsiVolume{})
	pulumi.RegisterInputType(reflect.TypeOf((*StoredIscsiVolumeArrayInput)(nil)).Elem(), StoredIscsiVolumeArray{})
	pulumi.RegisterInputType(reflect.TypeOf((*StoredIscsiVolumeMapInput)(nil)).Elem(), StoredIscsiVolumeMap{})
	pulumi.RegisterOutputType(StoredIscsiVolumeOutput{})
	pulumi.RegisterOutputType(StoredIscsiVolumePtrOutput{})
	pulumi.RegisterOutputType(StoredIscsiVolumeArrayOutput{})
	pulumi.RegisterOutputType(StoredIscsiVolumeMapOutput{})
}
